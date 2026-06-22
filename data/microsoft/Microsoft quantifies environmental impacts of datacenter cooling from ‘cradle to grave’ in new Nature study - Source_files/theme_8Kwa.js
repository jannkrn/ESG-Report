(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
})((function () { 'use strict';

	/*
	this is port of the javascript part of utilitycss that updates css variables
	code was ported to tailwinf, but keeping the --unit-fxx variable that relias on --vw
	*/
	(function () {
	  function onResize() {
	    document.documentElement.style.setProperty('--vw', document.body.clientWidth - 1 + 'px');
	    document.documentElement.style.setProperty('--vhfix', window.innerHeight + 'px');
	    document.documentElement.style.setProperty('--vhfixonce', window.innerHeight + 'px');
	  }
	  window.addEventListener('resize', onResize);
	  document.addEventListener('DOMContentLoaded', onResize);
	  window.addEventListener('load', onResize);
	  new ResizeObserver(onResize).observe(document.body);
	  onResize();
	})();

	/**
	 * JavaScript port of Webkit implementation of CSS cubic-bezier(p1x.p1y,p2x,p2y) by http://mck.me
	 * http://svn.webkit.org/repository/webkit/trunk/Source/WebCore/platform/graphics/UnitBezier.h
	 */
	var CubicBezier = (function () {
	  const DEFAULT_DURATION = 400; //ms

	  const solveEpsilon = function (duration) {
	    return 1.0 / (200.0 * duration);
	  };
	  const unitBezier = function (p1x, p1y, p2x, p2y) {
	    const cx = 3.0 * p1x;
	    const bx = 3.0 * (p2x - p1x) - cx;
	    const ax = 1.0 - cx - bx;
	    const cy = 3.0 * p1y;
	    const by = 3.0 * (p2y - p1y) - cy;
	    const ay = 1.0 - cy - by;
	    const sampleCurveX = function (t) {
	      return ((ax * t + bx) * t + cx) * t;
	    };
	    const sampleCurveY = function (t) {
	      return ((ay * t + by) * t + cy) * t;
	    };
	    const sampleCurveDerivativeX = function (t) {
	      return (3.0 * ax * t + 2.0 * bx) * t + cx;
	    };
	    const solveCurveX = function (x, epsilon) {
	      let t0, t1, t2, x2, d2, i;
	      for (t2 = x, i = 0; i < 8; i++) {
	        x2 = sampleCurveX(t2) - x;
	        if (Math.abs(x2) < epsilon) {
	          return t2;
	        }
	        d2 = sampleCurveDerivativeX(t2);
	        if (Math.abs(d2) < 1e-6) {
	          break;
	        }
	        t2 = t2 - x2 / d2;
	      }
	      t0 = 0.0;
	      t1 = 1.0;
	      t2 = x;
	      if (t2 < t0) {
	        return t0;
	      }
	      if (t2 > t1) {
	        return t1;
	      }
	      while (t0 < t1) {
	        x2 = sampleCurveX(t2);
	        if (Math.abs(x2 - x) < epsilon) {
	          return t2;
	        }
	        if (x > x2) {
	          t0 = t2;
	        } else {
	          t1 = t2;
	        }
	        t2 = (t1 - t0) * 0.5 + t0;
	      }

	      // Failure.
	      return t2;
	    };
	    const solve = function (x, epsilon) {
	      return sampleCurveY(solveCurveX(x, epsilon));
	    };
	    return function (x, duration) {
	      return solve(x, solveEpsilon(+duration || DEFAULT_DURATION));
	    };
	  };
	  return function (p1x, p1y, p2x, p2y, x, duration) {
	    return unitBezier(p1x, p1y, p2x, p2y)(x, duration);
	  };
	})();

	let isPlaying = false;
	const rafQueue = [];
	function removeFromRaf(animation) {
	  for (let i = 0; i < rafQueue.length; i++) {
	    if (rafQueue[i] == animation) {
	      rafQueue.splice(i, 1);
	      break;
	    }
	  }
	}
	function addToRaf(animation) {
	  let isInRaf = false;
	  rafQueue.forEach(anim => {
	    if (anim == animation) {
	      isInRaf = true;
	    }
	  });
	  if (!isInRaf) {
	    rafQueue.push(animation);
	  }
	}
	function update() {
	  requestAnimationFrame(update);
	  rafQueue.forEach(anim => {
	    anim && anim.update();
	  });
	}
	class WebAnimation {
	  constructor(options) {
	    this.step = options.step || function () {};
	    this.end = options.end || function () {};
	    this.direction = options.direction || 1;
	    this.duration = options.duration || 1000;
	    this.easing = options.easing || [0.550, 0.085, 0.680, 0.530];
	    this.delay = options.delay || 0;
	    this._progress = 0;
	    this._easedProgress = 0;
	  }
	  destroy() {
	    removeFromRaf(this);
	  }
	  play() {
	    this.delayProgress = 0;
	    this._progress = this.direction == 1 ? 0 : 1;
	    this._easedProgress = this.direction == 1 ? 0 : 1;
	    this.isPlaying = true;
	    addToRaf(this);
	    if (!isPlaying) {
	      isPlaying = true;
	      update();
	    }
	  }
	  pause() {
	    clearTimeout(this._delayTimer);
	    this.isPlaying = false;
	  }
	  reset() {
	    this._progress = 0;
	  }
	  update() {
	    if (this.isPlaying) {
	      if (this.delayProgress < this.delay) {
	        this.delayProgress += 1000 / 60;
	        return;
	      }
	      this._progress += 1 / (this.duration / (1000 / 60)) * this.direction;
	      this._easedProgress = CubicBezier(this.easing[0], this.easing[1], this.easing[2], this.easing[3], Math.max(0, Math.min(1, this._progress)), 1);
	      if (this.direction == 1 && this._easedProgress < 1 || this.direction == -1 && this._easedProgress > 0) {
	        this.step(this._easedProgress, this._progress);
	      } else {
	        this.isPlaying = false;
	        this._progress = this.direction == 1 ? 1 : 0;
	        this._easedProgress = this.direction == 1 ? 1 : 0;
	        this.step(this._easedProgress, this._progress);
	        this.end();
	      }
	    }
	  }
	}

	function tween(obj, options) {
	  options = options || {};
	  if (typeof options.to === void 0) {
	    throw obj;
	  }
	  const startValues = {};
	  for (const k in options.to) {
	    startValues[k] = obj[k];
	  }
	  const t = new WebAnimation({
	    step: e => {
	      for (const k in options.to) {
	        obj[k] = startValues[k] + (options.to[k] - startValues[k]) * e;
	      }
	      options.step && options.step(e);
	    },
	    end: options.end,
	    delay: options.delay * 1000,
	    duration: options.duration * 1000,
	    easing: options.easing
	  });
	  t.play();
	  return t;
	}

	function getPosition$2(node, scope) {
	  const root = scope || document;
	  const width = node.clientWidth;
	  const height = node.clientHeight;
	  let offsetTop = node.offsetTop;
	  let offsetLeft = node.offsetLeft;
	  while (node && node.offsetParent && node.offsetParent != document && node !== root && root !== node.offsetParent) {
	    offsetTop += node.offsetParent.offsetTop;
	    offsetLeft += node.offsetParent.offsetLeft;
	    node = node.offsetParent;
	  }
	  return {
	    top: offsetTop,
	    left: offsetLeft,
	    width,
	    height
	  };
	}
	class CoreDrag {
	  constructor(el) {
	    this.el = el;
	    //this.el.style.display    = 'block'

	    this.data = {
	      debug: false,
	      offset: 0,
	      active: true,
	      autoplayPosition: 0,
	      content: null,
	      currentIndex: 0,
	      scroll: 0,
	      position: [0, 0],
	      cursor: [0, 0],
	      prevent: false,
	      direction: 'x',
	      handlerPosition: [0, 0],
	      showBar: false,
	      swipe: false,
	      desktopOnly: false,
	      loop: this.el.getAttribute('loop') == 'false' ? false : this.el.hasAttribute('loop') ? true : false,
	      autoplay: this.el.getAttribute('autoplay') == 'false' ? false : this.el.hasAttribute('autoplay') ? true : false
	    };
	    this.lastDate = this.lastDate || performance.now();
	    this.speed = 0;
	    this.speedX = 0;
	    this._steps = [];
	    this.next = this.next.bind(this);
	    this.prev = this.prev.bind(this);
	    this._onPointerDown = this._onPointerDown.bind(this);
	    this._onPointerMove = this._onPointerMove.bind(this);
	    this._onPointerUp = this._onPointerUp.bind(this);
	    this.toggleAutoPlay = this.toggleAutoPlay.bind(this);
	    this.toggleAutoPlayPrevent = this.toggleAutoPlayPrevent.bind(this);
	    this.offset = 0;
	    this.isPointerDown = false;
	    this._pointerDown = [0, 0];
	    this._pointer = [0, 0];
	    this._handlerPosition = [0, 0];
	    this._positionDown = [0, 0];
	    this._position = [0, 0];
	    this._dragPosition = [0, 0];
	    this._cursor = [0, 0];
	    this._accX = 0;
	    this._accY = 0;
	    this._direction = 1;
	    this.$layers = this.el.querySelectorAll('[drag-layer]');
	    if (this.$layers.length > 0 && !this.hasResizedOnce) {
	      this.hasResizedOnce = true;
	      this.resize();
	    }
	    this.el.addEventListener('mousedown', this._onPointerDown, {
	      passive: false
	    });
	    this.el.addEventListener('touchstart', this._onPointerDown, {
	      passive: false
	    });
	    document.addEventListener('mousemove', this._onPointerMove, {
	      passive: false
	    });
	    document.addEventListener('touchmove', this._onPointerMove, {
	      passive: false
	    });
	    document.addEventListener('mouseup', this._onPointerUp, {
	      passive: false
	    });
	    document.addEventListener('touchend', this._onPointerUp, {
	      passive: false
	    });
	    this.$content = this.el.querySelector('[drag-content], [data-drag-content]');
	    const resizeObserver = new ResizeObserver(entries => {
	      this.resize();
	    });
	    resizeObserver.observe(this.$content);
	    this.$layers = this.el.querySelectorAll('[drag-layer]');
	    this._steps = [];
	    this.el.querySelectorAll('[drag-step], [data-drag-step]').forEach(el => {
	      this._steps.push({
	        el
	      });
	    });
	    this.$content.style.overflowX = 'visible';
	    this.$content.style.userSelect = 'none';
	    if (this.data.active) {
	      this.$content.style.cursor = 'grab';
	    }
	    this.$nextBtn = this.el.querySelectorAll('[data-drag-next], [drag-next]');
	    this.$nextBtn.forEach(el => {
	      el.removeEventListener('click', this.next);
	      el.addEventListener('click', this.next);
	    });
	    this.$prevBtn = this.el.querySelectorAll('[data-drag-prev], [drag-prev]');
	    this.$prevBtn.forEach(el => {
	      el.removeEventListener('click', this.prev);
	      el.addEventListener('click', this.prev);
	    });
	    this.$playBtn = this.el.querySelectorAll('[data-drag-playpause], [drag-playpause]');
	    this.$playBtn.forEach(el => {
	      el.removeEventListener('mousedown', this.toggleAutoPlayPrevent);
	      el.addEventListener('mousedown', this.toggleAutoPlayPrevent);
	    });
	    this.$playBtn.forEach(el => {
	      el.removeEventListener('click', this.toggleAutoPlay);
	      el.addEventListener('click', this.toggleAutoPlay);
	    });
	    this.$scrollbarHandle = this.el.querySelector('[data-drag-scrollbar-handle]');
	    this.resize();
	    setTimeout(() => {
	      this.resize();
	    }, 1000);
	  }
	  prev() {
	    // this.data.currentIndex -= 1;
	    // this.data.currentIndex = Math.max( 0, this.data.currentIndex )
	    // this.onCurrentIndexChange()
	    this._scrollTween = tween(this._position, {
	      to: {
	        0: this._position[0] + this._steps[0].width // + this._steps[0].left,//Math.max( -this._contentWidth+this._width, this._steps[this.data.currentIndex].left*-1 + this._steps[0].left) ,
	      },

	      duration: 0.6,
	      easing: [0.49, 0.01, 0.27, 1]
	    });
	  }
	  next() {
	    // this.data.currentIndex += 1;
	    // this.data.currentIndex = Math.min( this._steps.length-1, this.data.currentIndex )
	    // this.onCurrentIndexChange()
	    this._scrollTween = tween(this._position, {
	      to: {
	        0: this._position[0] - this._steps[0].width // + this._steps[0].left,//Math.max( -this._contentWidth+this._width, this._steps[this.data.currentIndex].left*-1 + this._steps[0].left) ,
	      },

	      duration: 0.6,
	      easing: [0.49, 0.01, 0.27, 1]
	    });
	  }
	  onCurrentIndexChange() {

	    // if (this.data.currentIndex > this._steps.length-1) {
	    //     this.data.currentIndex = 0;//this._steps.length-1
	    // }
	    // if (this.data.currentIndex < 0) {
	    //     this.data.currentIndex = this._steps.length-1
	    // }
	    // if (!this._steps[this.data.currentIndex]) {
	    //     return;
	    // }
	    // console.log('onCurrentIndexChange', this.data.currentIndex, this._steps[this.data.currentIndex].left * -1)
	  }
	  _onPointerDown(event) {
	    this.speedX = 0;
	    this.lastDate = performance.now();
	    this.isPointerDown = true;
	    this.preventClick = false;
	    const touchEvent = event.touches || event.changedTouches ? event.touches[0] || event.changedTouches[0] : event;
	    let touchEventPageX = touchEvent.pageX;
	    let touchEventPageY = touchEvent.pageY;
	    touchEventPageX -= window.pageXOffset || document.documentElement.scrollLeft;
	    touchEventPageY -= window.pageYOffset || document.documentElement.scrollTop;
	    this.lastTouchEventPageX = touchEventPageX;
	    this._accX = 0;
	    this._accY = 0;
	    this._pointerDown[0] = touchEventPageX;
	    this._pointerDown[1] = touchEventPageY;
	    this._positionDown[0] = this._position[0];
	    this._positionDown[1] = this._position[1];
	    this._lastMoveX = this._pointerDown[0];
	    this._lastMoveY = this._pointerDown[1];
	    this.isPointerDown = true;
	    if (this.data.active) {
	      this.$content.style.cursor = 'grabbing';
	    }
	    this.isDeccelerating = false;
	    this.lastDate = performance.now();
	  }
	  toggleAutoPlayPrevent(e) {
	    this.isToggleBtn = true;
	  }
	  toggleAutoPlay(e) {
	    this.data.autoplay = !this.data.autoplay;
	    this.el.classList[this.data.autoplay ? 'remove' : 'add']('is-paused');
	    this.$playBtn.forEach(btn => btn.setAttribute('aria-label', this.data.autoplay ? 'Stop auto play' : 'Start auto play'));
	  }
	  _onHandlerDown() {
	    this.isHanlderDown = true;
	  }
	  _onPointerMove(event) {
	    const touchEvent = event.touches || event.changedTouches ? event.touches[0] || event.changedTouches[0] : event;
	    let touchEventPageX = touchEvent.pageX;
	    let touchEventPageY = touchEvent.pageY;
	    touchEventPageX -= window.pageXOffset || document.documentElement.scrollLeft;
	    touchEventPageY -= window.pageYOffset || document.documentElement.scrollTop;
	    if (!this.isPointerDown) {
	      return;
	    }
	    this.lastTouchEventPageX = this.lastTouchEventPageX || touchEventPageX;
	    const diffX = touchEventPageX - this.lastTouchEventPageX; //_pointerDown[0]
	    touchEventPageY - this.lastTouchEventPageY; //_pointerDown[1]

	    this.lastTouchEventPageX = touchEventPageX;
	    if (!this.isHanlderDown) {
	      this._accX += Math.abs(this._lastMoveX - touchEventPageX);
	      this._accY += Math.abs(this._lastMoveY - touchEventPageY);
	      this._lastMoveX = touchEventPageX;
	      this._lastMoveY = touchEventPageY;
	      if (this.data.direction == 'y') {
	        event.preventDefault();
	        event.stopPropagation();
	      }
	      if (Math.abs(this._accX) > 5 && Math.abs(this._accX) > Math.abs(this._accY) && this.data.direction == 'x' || Math.abs(this._accY) > 5 && Math.abs(this._accY) > Math.abs(this._accX) && this.data.direction == 'y' || this.preventClick) {
	        this.preventClick = true;
	        window.preventClick = true;
	        this.lastDate = this.lastDate || performance.now();
	        const timeDiff = performance.now() - this.lastDate;
	        this.speedX = diffX / (timeDiff + 0.001);
	        this.speedX = Math.min(10, Math.max(-10, this.speedX));
	        this.lastDate = performance.now();
	        this.layers && this.layers.forEach((layer, i) => {
	          layer.el.querySelectorAll('a').forEach(a => a.style.pointerEvents = 'none');
	        });
	      }
	    }

	    //stop autoscroll for desktop
	    if (!event.touches && !event.changedTouches) {
	      this.data.autoplay = false;
	      this.el.classList[this.data.autoplay ? 'remove' : 'add']('is-paused');
	    }
	  }
	  _onPointerUp(event) {
	    //stop autoscroll for desktop

	    this.isHanlderDown = false;
	    if (!this.isPointerDown) {
	      this.isToggleBtn = false;
	      return true;
	    }
	    if (!event.touches && !event.changedTouches && !this.isToggleBtn) {
	      this.data.autoplay = false;
	      this.el.classList[this.data.autoplay ? 'remove' : 'add']('is-paused');
	    }
	    this.isToggleBtn = false;
	    if (this.preventClick) {
	      event.preventDefault();
	      event.stopPropagation();
	      setTimeout(() => {
	        this.data.prevent = false;
	        this.isPointerDown = false;
	        this.preventClick = false;
	        this.layers && this.layers.forEach((layer, i) => {
	          layer.el.querySelectorAll('a').forEach(a => a.style.pointerEvents = 'auto');
	        });
	      }, 200);
	    } else {
	      this.preventClick = false;
	    }
	    if (this.data.active) {
	      this.$content.style.cursor = 'grab';
	    }
	    this.isDeccelerating = true;
	    this.isPointerDown = false;
	    this.isPointerDown = false;
	    setTimeout(() => {
	      requestAnimationFrame(() => {
	        window.preventClick = false;
	      });
	    }, 10);
	  }
	  resize() {
	    this._scrollTween && this._scrollTween?.destroy();
	    if (window.innerWidth <= 600) {
	      return;
	    }
	    if (!this.$content) {
	      return;
	    }
	    if (!this.layers || this.layers.length == 0) {
	      this.layers = [];
	      this.$layers = this.el.querySelectorAll('[drag-layer]');
	      this.$layers.forEach((el, i) => {
	        this.layers.push({
	          el,
	          x: 0,
	          offset: 0,
	          ratio: 0,
	          width: el.clientWidth,
	          left: el.offsetLeft
	        });
	        if (!el.hasAttribute('data-src')) {
	          this.layers[i].loaded = true;
	        } else {
	          const img = new Image();
	          img.onload = () => {
	            this.layers[i].loaded = true;
	            this.layers[i].width = el.clientWidth;
	            setTimeout(() => {
	              this.resize();
	            }, 300);
	          };
	          img.onerror = () => {
	            this.layers[i].error = true;
	          };
	          img.src = el.getAttribute('data-src');
	        }
	      });
	    } else {
	      this.layers.forEach((layer, i) => {
	        layer.width = layer.el.clientWidth;
	        layer.left = layer.el.offsetLeft;
	        layer.offset = 0;
	      });
	    }
	    this.data.position[0] = 0;
	    this._position[0] = 0;
	    this._width = this.el.clientWidth;
	    this._height = this.el.clientHeight;
	    this._contentWidth = this.$content.scrollWidth * (this.el.hasAttribute('data-trim') ? Number(this.el.getAttribute('data-trim')) : 1);
	    this._contentHeight = this.$content.scrollHeight;
	    const bounds = getPosition$2(this.el);
	    this._left = bounds.left;
	    this._top = bounds.top;
	    if (this.$content) {
	      const bounds = getPosition$2(this.$content);
	      this._contentLeft = bounds.left;
	    }
	    for (let i = 0; i < this._steps.length; i++) {
	      this._steps[i].width = this._steps[i].el.clientWidth;
	      this._steps[i].left = getPosition$2(this._steps[i].el).left; //.offsetLeft
	    }

	    if (this._steps.length > 1) {
	      const prevStep = this._steps.length - 2;
	      const lastStep = this._steps.length - 1;
	      const space = this._steps[lastStep].left - (this._steps[prevStep].left + this._steps[prevStep].width);
	      this._scrollWidth = this._steps[lastStep].left + this._steps[lastStep].width + space;
	    }
	  }
	  update() {
	    if (window.innerWidth <= 600) {
	      this.layers && this.layers.forEach((layer, i) => {
	        layer.el.style.transform = 'none';
	      });
	      this.isDeccelerating = false;
	      return;
	    }
	    if (!this.data.active) {
	      return;
	    }
	    if (this.data.active) {
	      this.$content.style.cursor = 'grab';
	    }
	    if (this._steps && this._steps.length > 0) {
	      let lastActive = -1;
	      if (this._steps.length > 0) {
	        const isFirst = this._position[0] > -10;
	        this.$prevBtn?.forEach(el => {
	          if (isFirst && !el.classList.contains('is-disabled')) {
	            el.classList.add('is-disabled');
	          }
	          if (!isFirst && el.classList.contains('is-disabled')) {
	            el.classList.remove('is-disabled');
	          }
	        });
	        const isLast = this._steps[this._steps.length - 1].left + this._steps[this._steps.length - 1].width + this._position[0] <= this._left + this._width;
	        this.$nextBtn?.forEach(el => el.classList[isLast ? 'add' : 'remove']('is-disabled'));
	        for (let i = 0; i < this._steps.length; i++) {
	          const currPos = this._steps[i].left + this._position[0];
	          if (currPos <= this._left + this._steps[0].width) {
	            lastActive = i;
	          }
	        }
	      }
	      if (lastActive !== this._lastActive) {
	        this._lastActive = lastActive;
	        this._lastActive + 1 >= this._steps.length ? 0 : this._lastActive + 1;
	        this._lastActive - 1 < 0 ? this._steps.length - 1 : this._lastActive - 1;
	        this.$prevBtn?.forEach(el => el?.setAttribute('aria-label', 'Scroll view forward to show slide ${ prevIndex + 1 }'));
	        this.$nextBtn?.forEach(el => el?.setAttribute('aria-label', 'Scroll view backward to show slide ${ nextIndex + 1 }'));
	      }
	    }

	    // this.lastDate =  this.lastDate || performance.now()
	    this._position[0] += this.speedX * 17;
	    this.speedX *= 0.96;
	    if (this.speedX < 0.01) {
	      this.isDeccelerating = false;
	    }
	    if (this.data.autoplay && !this.isPointerDown && !this.isDeccelerating) {
	      this._position[0] -= 0.4;
	      if (!this.data.loop) {
	        this._position[0] = Math.min(0, Math.max(-this._contentWidth + this._width, this._position[0]));
	      }
	    }
	    this.data.position[0] += (this.data.offset * this._contentWidth + this._position[0] - this.data.position[0]) * 1;
	    if (!this.data.loop) {
	      this._position[0] = Math.min(0, Math.max(-this._contentWidth + this._width, this._position[0]));
	      this._position[1] = Math.min(0, Math.max(-this._contentHeight + this._height, this._position[1]));
	    }
	    this.data.cursor[0] += (this._cursor[0] - this.data.cursor[0]) * 0.5;
	    this.data.cursor[1] += (this._cursor[1] - this.data.cursor[1]) * 0.5;
	    this.data.position[0];
	    this.layers && this.layers.forEach((layer, i) => {
	      if (this.data.loop) {
	        if ( /*this.offset +*/this.data.position[0] + layer.left + layer.offset < -layer.width) {
	          layer.offset += this._scrollWidth;
	        }
	        if ( /*this.offset +*/this.data.position[0] + layer.left + layer.offset > this._width) {
	          layer.offset -= this._scrollWidth;
	        }
	      }
	      const x = /*this.offset +*/this.data.position[0] + layer.offset;
	      layer.el.style.transform = 'translate(' + x + 'px, ' + this.data.position[1] + 'px) translateZ(0)';
	    });
	    if (this.$scrollbarHandle) {
	      this.$scrollbarHandle.style.transform = `translateX(${this.data.position[0] / (-this._contentWidth + this._width) % 1 * 100}%) translateZ(0)`;
	    }
	  }
	}

	// Core drag module
	function onReady$5() {
	  if (window.innerWidth > 600) {
	    const coreDrags = [];
	    const $coreDrags = document.querySelectorAll('[core-drag]');
	    $coreDrags?.forEach($coreDrag => {
	      coreDrags.push(new CoreDrag($coreDrag));
	    });
	    function onResize() {
	      coreDrags.forEach(coreDrag => coreDrag.resize());
	    }
	    function render() {
	      requestAnimationFrame(render);
	      coreDrags.forEach(coreDrag => coreDrag.update());
	    }
	    window.addEventListener('resize', onResize);
	    onResize();
	    requestAnimationFrame(render);
	  }
	}
	if (document.readyState === 'complete') {
	  onReady$5();
	} else {
	  window.addEventListener('DOMContentLoaded', onReady$5);
	}

	function getPosition$1(node, scope) {
	  const root = scope || document;
	  const width = node.clientWidth;
	  const height = node.clientHeight;
	  let offsetTop = node.offsetTop;
	  let offsetLeft = node.offsetLeft;
	  while (node && node.offsetParent && node.offsetParent != document && node !== root && root !== node.offsetParent) {
	    offsetTop += node.offsetParent.offsetTop;
	    offsetLeft += node.offsetParent.offsetLeft;
	    node = node.offsetParent;
	  }
	  return {
	    top: offsetTop,
	    left: offsetLeft,
	    width,
	    height
	  };
	}
	class SplitText extends HTMLElement {
	  constructor() {
	    super();
	    this.resize = this.resize.bind(this);
	    this.intersectionObserver = new IntersectionObserver(entries => {
	      entries.forEach(el => {
	        if (el.isIntersecting) {
	          el.target.classList.add('in-view');
	        }
	      });
	    });
	  }
	  connectedCallback() {
	    this.originalText = this.innerHTML;
	    this.numLines = 0;
	    this.convertTextToMultilines();
	    this.resize();
	    this.intersectionObserver.observe(this);
	    window.addEventListener('resize', this.resize);
	    this.resizeObserver = new ResizeObserver(e => {
	      this.resize();
	    });
	    this.resizeObserver.observe(this);
	    this.resizeObserver.observe(document.body);
	    const delay = this.getAttribute('data-delay') || this.getAttribute('delay');
	    this.style.setProperty('--delay', Number(delay));
	    this.classList.add('ready');
	  }
	  disconnectedCallback() {
	    this.intersectionObserver.unobserve(this);
	    window.removeEventListener('resize', this.resize);
	    this.resizeObserver.unobserve(this);
	    this.resizeObserver.unobserve(document.body);
	  }
	  nestedEach(node, cb) {
	    cb(node);
	    node?.childNodes?.forEach(n => {
	      this.nestedEach(n, cb);
	    });
	  }
	  resize() {
	    let currY = -1;
	    let lineIndex = -1;
	    let wordIndex = 0;
	    let globalWordIndex = 0;
	    const $words = this.querySelectorAll('[data-word]');
	    $words?.forEach(el => {
	      const p = getPosition$1(el);
	      if (p.top > currY) {
	        currY = p.top;
	        lineIndex++;
	        wordIndex = 0;
	      }
	      el.setAttribute('data-line-index', lineIndex);
	      el.setAttribute('data-word-index', wordIndex);
	      el.setAttribute('data-all-word-index', wordIndex);
	      el.style.setProperty('--word-index', wordIndex);
	      el.style.setProperty('--all-word-index', globalWordIndex);
	      el.style.setProperty('--line-index', lineIndex);
	      wordIndex++;
	      globalWordIndex++;
	    });
	    this.numLines = lineIndex + 1;
	  }
	  convertTextToMultilines() {
	    const textNodes = [];
	    this.nestedEach(this, el => {
	      if (el.nodeType === 3 && el.textContent.trim() !== '') {
	        textNodes.push(el);
	      }
	      if (el.nodeType !== 3 && el.tagName === 'BR') {
	        const $wrappedBR = document.createElement('span');
	        $wrappedBR.innerHTML = '<br/>';
	        $wrappedBR.classList.add('desktop-break');
	        el.parentNode?.replaceChild($wrappedBR, el);
	      }
	    });
	    textNodes.forEach(el => {
	      const words = el.textContent.trim().split(/\s+/);
	      const parent = el.parentNode;
	      if (parent) {
	        const fragment = document.createDocumentFragment();
	        words.forEach((word, index) => {
	          const $outerSpan = document.createElement('span');
	          $outerSpan.setAttribute('data-word', '');
	          $outerSpan.style.display = 'inline-block';
	          $outerSpan.style.position = 'relative';
	          $outerSpan.setAttribute('data-line-index', 0);
	          $outerSpan.setAttribute('data-word-index', 0);
	          $outerSpan.classList?.add('text-line');
	          $outerSpan.innerHTML = word || ' ';
	          fragment.appendChild($outerSpan);
	          // if (index < words.length - 1) {
	          fragment.appendChild(document.createTextNode(' '));
	          // }
	        });

	        parent.replaceChild(fragment, el);
	      }
	    });
	  }
	}
	customElements.define('split-text', SplitText);

	function onDomReady() {
	  if (window.acf) {
	    function onReady() {
	      const $scrollObjects = document.querySelectorAll('[scroll-object]');
	      $scrollObjects.forEach(el => {
	        if (!el.classList.contains('in-view')) {
	          el.classList.add('in-view');
	          el.hasInitAdmin = true;
	          if (el.hasAttribute('data-scale')) {
	            const scale = Number(el.getAttribute('data-scale'));
	            el.style.setProperty('--scaleX', scale);
	            el.style.setProperty('--scaleY', scale);
	          }
	        }
	      });
	    }
	    window.acf.addAction(`render_block_preview`, onReady);
	  } else {
	    // Scroll Animations
	    const $scrollObjects = document.querySelectorAll('[scroll-object]');
	    function onIntersect(entries) {
	      entries.forEach(el => {
	        if (el.isIntersecting) {
	          el.target.classList.add('in-view');
	        } else {
	          el.target.classList.remove('in-view');
	        }
	        if (el.target.hasAttribute('data-scale')) {
	          const scale = Number(el.target.getAttribute('data-scale'));
	          if (el.isIntersecting) {
	            el.target.style.setProperty('--scaleX', scale);
	            el.target.style.setProperty('--scaleY', scale);
	          } else {
	            el.target.style.removeProperty('--scaleX');
	            el.target.style.removeProperty('--scaleY');
	          }
	        }
	      });
	    }
	    const observer = new IntersectionObserver(onIntersect); //, { rootMargin: `0px 0px ${window.innerHeight*-0.5}px 0px`});
	    $scrollObjects.forEach(el => observer.observe(el));
	  }
	}
	if (document.readyState === 'complete') {
	  onDomReady();
	} else {
	  window.addEventListener('DOMContentLoaded', onDomReady);
	}

	if (document.readyState === 'complete') {
	  onReady$4();
	} else {
	  window.addEventListener('DOMContentLoaded', onReady$4);
	}
	function onReady$4() {
	  // Hover card texts
	  const $dragCardContent = document.querySelectorAll('[drag-card-content]');
	  const fixTextHeight = () => {
	    if (window.innerWidth < 600) {
	      $dragCardContent.forEach(el => {
	        el.style.removeProperty('transform');
	      });
	      return;
	    }
	    $dragCardContent.forEach(el => {
	      resizeObserver.observe(el);
	      const $text = el.querySelector('[drag-card-text]');
	      el.style.transform = `translateY(${$text.clientHeight + 20}px)`;
	    });
	  };
	  const resizeObserver = new ResizeObserver(entries => {
	    fixTextHeight();
	  });
	  window.addEventListener('resize', fixTextHeight);
	  fixTextHeight();
	}

	function openVideoPlayer(videoID, $playersPlayBtn, videoStartTime) {
	  let startTimeInSeconds = 0;
	  if (videoStartTime) {
	    const timeParts = videoStartTime.split(':');
	    const minutes = parseInt(timeParts[0], 10);
	    const seconds = parseInt(timeParts[1], 10);
	    startTimeInSeconds = minutes * 60 + seconds;
	  }
	  const $iframeWrap = document.createElement('div');
	  $iframeWrap.style.position = 'fixed';
	  $iframeWrap.style.background = 'rgba(0,0,0,0.8)';
	  $iframeWrap.style.top = 0;
	  $iframeWrap.style.left = 0;
	  $iframeWrap.style.width = '100%';
	  $iframeWrap.style.height = '100vh';
	  $iframeWrap.style.zIndex = 9999999999;
	  $iframeWrap.style.display = 'flex';
	  $iframeWrap.style.alignItems = 'center';
	  $iframeWrap.style.justifyContent = 'center';
	  $iframeWrap.setAttribute('id', 'player-modal');
	  document.body.appendChild($iframeWrap);
	  const $content = document.createElement('div');
	  $content.style.width = 640 + 'px';
	  $content.style.height = 480 + 'px';
	  if (window.innerWidth > 1280) {
	    const ratio = 16 / 9;
	    $content.style.width = window.innerHeight * 0.75 * ratio + 'px';
	    $content.style.height = window.innerHeight * 0.75 + 'px';
	  }
	  if (window.innerWidth < 600) {
	    $content.style.width = '100%';
	    $content.style.height = '100vh';
	  }
	  $content.style.position = 'relative';
	  $iframeWrap.appendChild($content);
	  const $close = document.createElement('button');
	  $close.style.position = 'absolute';
	  $close.style.background = 'none';
	  $close.style.border = 'none';
	  $close.style.bottom = '100%';
	  $close.style.fontSize = '0px';
	  $close.style.right = 0;
	  $close.style.padding = '5px';
	  $close.style.cursor = 'pointer';
	  $close.setAttribute('aria-label', 'Close video player');
	  $close.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px"><path fill="#fff" d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/></svg>`;
	  if (window.innerWidth < 600) {
	    $close.style.position = 'absolute';
	    $close.style.border = 'none';
	    $close.style.bottom = 'calc(100% - 50px)';
	    $close.style.right = '10px';
	    $close.style.padding = '10px';
	    $close.style.background = '#fff';
	    $close.style.borderRadius = '100px';
	    $close.style.color = '#000';
	    $close.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px"><path fill="#000" d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/></svg>`;
	  }
	  $close.addEventListener('click', () => {
	    if ($playersPlayBtn) {
	      $playersPlayBtn.focus();
	    }
	    document.body.removeChild($iframeWrap);
	    const savedScroll = window.pageYOffset;
	    function onHashChange(e) {
	      window.removeEventListener('hashchange', onHashChange);
	      if (window.preventScroll) {
	        e.preventDefault();
	        window.scrollTo(0, savedScroll);
	        window.preventScroll = false;
	      }
	    }
	    window.addEventListener('hashchange', onHashChange);
	    window.preventScroll = true;
	    window.location.hash = '';
	    $close.setAttribute('tabindex', -1);
	    document.removeEventListener('keyup', onKeyDown);
	    $close.setAttribute('tabindex', -1);
	    document.removeEventListener('keyup', onKeyDown);
	  });
	  function EscapeModal(e) {
	    if (e.key === 'Escape') {
	      $iframeWrap.remove();
	      window.location.hash = '';
	      if ($playersPlayBtn) {
	        $playersPlayBtn.focus();
	      }
	    }
	  }
	  window.addEventListener('keydown', EscapeModal);
	  const $iframe = document.createElement('iframe');
	  $iframe.style.width = '100%';
	  $iframe.style.height = '100%';
	  $iframe.setAttribute('frameborder', 0);
	  $iframe.setAttribute('allow', 'autoplay; fullscreen');
	  $iframe.setAttribute('src', `https://www.youtube-nocookie.com/embed/${videoID}?autoplay=1&autohide=1&fs=1&modestbranding=1&showinfo=0&controls=2&autoplay=1&rel=0&theme=light&vq=hd720&start=${startTimeInSeconds}`);
	  $iframe.setAttribute('tabindex', 1);

	  // make sure the button appears BEFORE the iframe in the DOM
	  $content.appendChild($iframe);
	  $content.appendChild($close);
	  function onKeyDown(e) {
	    if (document.activeElement !== $close) {
	      $iframe.focus();
	    }
	  }
	  $iframe.addEventListener('keydown', EscapeModal);
	  document.addEventListener('keyup', onKeyDown);
	  setTimeout(() => {
	    $iframe.focus();
	    $iframe.click();
	    setTimeout(() => {
	      $iframe.focus();
	      $iframe.click();
	      $close.setAttribute('tabindex', 1);
	    }, 1000);
	  }, 1000);
	  window.location.hash = '#video-' + videoID;
	}
	if (document.readyState === 'complete') {
	  onReady$3();
	} else {
	  window.addEventListener('DOMContentLoaded', onReady$3);
	}
	function onReady$3() {
	  const $players = document.querySelectorAll('[yt-player-btn]');
	  $players.forEach($btn => {
	    function initIframe(e) {
	      e.stopPropagation();
	      e.preventDefault();
	      if (window.preventClick) {
	        return;
	      }
	      let videoID = e.currentTarget.getAttribute('yt-video-id');
	      if (window.innerWidth < 600 && e.currentTarget.hasAttribute('yt-video-id-mobile')) {
	        videoID = e.currentTarget.getAttribute('yt-video-id-mobile');
	      }
	      const videoStartTime = e.currentTarget.getAttribute('yt-start-time') || 0;
	      const $playersPlayBtn = document.activeElement;
	      openVideoPlayer(videoID, $playersPlayBtn, videoStartTime);
	    }
	    $btn.addEventListener('click', initIframe);
	  });
	  if (/\#video\-/.test(window.location.hash)) {
	    openVideoPlayer(window.location.hash.replace('#video-', ''));
	  }
	}

	function onReady$2() {
	  // Background Fade Animation
	  if (window.acf) {
	    let hasInitAdmin = false;
	    function onReady() {
	      if (hasInitAdmin) {
	        return;
	      }
	      hasInitAdmin = true;
	      const $bgFade = document.querySelectorAll('[data-bg-fade]');
	      $bgFade.forEach(el => {
	        el.style.backgroundColor = el.getAttribute('data-bg-fade');
	        if (el.getAttribute('data-color-fade')) {
	          el.style.color = el.getAttribute('data-color-fade');
	        }
	      });
	    }
	    window.acf.addAction(`render_block_preview`, onReady);
	  } else {
	    let hasChangedOnce = false;
	    const $bgFade = document.querySelectorAll('[data-bg-fade]');
	    let observer = new IntersectionObserver(onIntersect, {
	      rootMargin: `0px 0px ${window.innerHeight * -0.5}px 0px`
	    });
	    const states = [];
	    $bgFade.forEach((el, i) => {
	      el._index = i;
	      states.push({
	        el,
	        intersecting: false,
	        i
	      });
	    });
	    function onIntersect(entries) {
	      entries.forEach(el => {
	        document.body.classList.add('no-transition');
	        if (hasChangedOnce) {
	          document.body.style.transition = 'background-color 1.1s var(--alias-easeOut), color 1.1s var(--alias-easeOut)';
	        }
	        if (el.isIntersecting) {
	          document.body.style.backgroundColor = el.target.getAttribute('data-bg-fade');
	          if (el.target.getAttribute('data-color-fade')) {
	            document.body.style.color = el.target.getAttribute('data-color-fade');
	          } else {
	            document.body.style.removeProperty('color');
	          }
	          states[el.target._index].intersecting = true;
	        } else {
	          states[el.target._index].intersecting = false;
	          let lastIntersecting = -1;
	          for (let i = 0; i < states.length; i++) {
	            if (states[i].intersecting) {
	              lastIntersecting = i;
	            }
	          }
	          if (lastIntersecting > -1) {
	            const target = states[lastIntersecting].el;
	            document.body.style.backgroundColor = target.getAttribute('data-bg-fade');
	            if (target.getAttribute('data-color-fade')) {
	              document.body.style.color = target.getAttribute('data-color-fade');
	            } else {
	              document.body.style.removeProperty('color');
	            }
	          } else {
	            document.body.style.removeProperty('background-color');
	            document.body.style.removeProperty('color');
	          }
	        }
	      });
	      hasChangedOnce = true;
	    }
	    $bgFade.forEach(el => observer.observe(el));
	    window.addEventListener('resize', () => {
	      $bgFade.forEach(el => observer.unobserve(el));
	      observer = new IntersectionObserver(onIntersect, {
	        rootMargin: `0px 0px ${window.innerHeight * -0.5}px 0px`
	      });
	      $bgFade.forEach(el => observer.observe(el));
	    });
	    $bgFade.forEach((el, i) => {
	      el.style.backgroundColor = $bgFade[0].getAttribute('data-bg-fade');
	      el.style.color = $bgFade[0].getAttribute('data-color-fade');
	    });
	    setTimeout(() => {
	      $bgFade.forEach((el, i) => {
	        el.style.removeProperty('background-color');
	        el.style.removeProperty('color');
	      });
	    }, 1000);
	  }
	}
	if (document.readyState === 'complete') {
	  onReady$2();
	} else {
	  window.addEventListener('DOMContentLoaded', onReady$2);
	}

	// Update fx units based on ACF preview block size

	function onReady$1() {
	  function onAdminResize() {
	    const contentWidth = document.querySelector('.acf-block-preview').clientWidth;
	    document.documentElement.style.setProperty('--vw', contentWidth + 'px');
	    document.documentElement.style.setProperty('--vh', contentWidth * 0.625 + 'px');
	    document.documentElement.style.setProperty('--vhfix', contentWidth * 0.625 + 'px');
	    document.documentElement.style.setProperty('--unit-fxx', `calc( var(--vw) / 1920 )`);
	    document.querySelectorAll('.acf-block-preview').forEach(el => {
	      el.style.setProperty('--vw', contentWidth + 'px');
	      el.style.setProperty('--vh', contentWidth * 0.625 + 'px');
	      el.style.setProperty('--vhfix', contentWidth * 0.625 + 'px');
	      el.style.setProperty('--unit-fxx', 'calc( var(--vw) / 1920 )');
	    });
	    document.querySelectorAll('[className]')?.forEach(element => {
	      element.setAttribute('class', element.getAttribute('className'));
	      element.removeAttribute('className');
	    });
	  }
	  let hasInitAdmin = false;
	  const adminInit = () => {
	    const $ref = document.querySelector('.acf-block-preview');
	    if (!$ref) {
	      return;
	    }
	    if (!hasInitAdmin) {
	      hasInitAdmin = true;
	      new ResizeObserver(onAdminResize).observe($ref);
	    }

	    // window.acf.addAction('new_field', (field)=>{
	    //     console.log('___NEW_FIELD_READY__', field);
	    //     // add class to this field
	    //     // field.$el.addClass('my-class');
	    //     // add click event to this field's button
	    //     // field.on('click', 'button', function( e ){
	    //     //     e.preventDefault();
	    //     //     alert('Special event');
	    //     // });
	    // });
	    // acf.addAction('new_field/type=select', myCallback);          // image fields
	    // acf.addAction('new_field/name=hero_image', myCallback);     // fields named "hero_image"
	    // acf.addAction('new_field/key=field_123456', myCallback);    // field with key "field_123456"

	    onAdminResize();
	  };
	  const addEyeDropper = target => {
	    if (!window.EyeDropper) ; else {
	      target.$el.click(function () {
	        const eyeDropper = new EyeDropper();
	        const abortController = new AbortController();
	        eyeDropper.open({
	          signal: abortController.signal
	        }).then(result => {
	          target.$el.find('input.wp-color-picker').first().iris('color', result.sRGBHex);
	        }).catch(e => {
	          // silence
	        });
	        setTimeout(() => {
	          abortController.abort();
	        }, 5000);
	      });
	    }
	  };
	  if (window.acf) {
	    acf.addAction('ready', adminInit);
	    acf.addAction(`render_block_preview`, adminInit);
	    acf.addAction('remount', adminInit);
	    acf.addAction('ready_field/type=color_picker', addEyeDropper);
	    acf.addAction('append_field/type=color_picker', addEyeDropper);
	  }
	  window.addEventListener('resize', adminInit);
	  document.addEventListener('DOMContentLoaded', adminInit);
	  adminInit();
	  setTimeout(() => {
	    adminInit();
	    setTimeout(() => {
	      adminInit();
	    }, 1000);
	  }, 1000);
	}
	if (document.readyState === 'complete') {
	  onReady$1();
	} else {
	  window.addEventListener('DOMContentLoaded', onReady$1);
	}

	// DEBUG TOOLS
	if (!window.acf) {
	  let showGuides = false;
	  window.addEventListener('keypress', e => {
	    if (e.which == 104) {
	      //H
	      showGuides = !showGuides;
	      document.body.classList[showGuides ? 'add' : 'remove']('is-debug');
	    }
	  });
	}

	if (document.readyState === 'complete') {
	  onReady();
	} else {
	  window.addEventListener('DOMContentLoaded', onReady);
	}
	function onReady() {
	  // fix height of viewport height section so they fit the grid
	  function adjustSectionHeight() {
	    const baseLineHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--vertical-rhythm'), 10);
	    const viewportHeight = window.innerHeight;
	    const adjustedHeight = viewportHeight - viewportHeight % baseLineHeight;
	    document.documentElement.style.setProperty('--adjusted-height', `${adjustedHeight}px`);
	  }
	  adjustSectionHeight();
	  window.addEventListener('resize', adjustSectionHeight);
	}

	class CoreSlideshow extends HTMLElement {
	  constructor() {
	    super();
	    this.data = {
	      index: -1
	    };
	    this.prev = this.prev.bind(this);
	    this.next = this.next.bind(this);
	  }
	  next() {
	    this.data.index++;
	    this.data.index = this.data.index > this.$slides.length - 1 ? 0 : this.data.index;
	    this.updateSlides();
	  }
	  prev() {
	    this.data.index--;
	    this.data.index = this.data.index < 0 ? this.$slides.length - 1 : this.data.index;
	    this.updateSlides();
	  }
	  updateSlides() {
	    this.$slides.forEach((el, i) => {
	      el.classList[i == this.data.index ? 'add' : 'remove']('is-active');
	      if (i == this.data.index) {
	        el.setAttribute('tabindex', -1);
	        el.style.pointerEvents = 'auto';
	        el.removeAttribute('aria-hidden');
	        el.focus();
	      } else {
	        el.setAttribute('tabindex', -1);
	        el.style.pointerEvents = 'none';
	        el.setAttribute('aria-hidden', true);
	      }
	    });
	  }
	  connectedCallback() {
	    this.$slides = this.querySelectorAll('[data-slide');
	    this.$prevBtn = this.querySelector('[data-prev-btn');
	    this.$nextBtn = this.querySelector('[data-next-btn');
	    this.$prevBtn.addEventListener('click', this.prev, false);
	    this.$nextBtn.addEventListener('click', this.next, false);
	    this.updateSlides();
	  }
	  disconnectedCallback() {
	    this.$prevBtn.removeEventListener('click', this.prev, false);
	    this.$nextBtn.removeEventListener('click', this.next, false);
	  }
	}
	customElements.define('core-slideshow', CoreSlideshow);

	class CoreExpandable extends HTMLElement {
	  constructor() {
	    super();
	    this.data = {
	      opened: false
	    };
	    this.toggle = this.toggle.bind(this);
	  }
	  toggle() {
	    this.data.opened = !this.data.opened;
	    this.$content.style.display = this.data.opened ? 'block' : 'none';
	    this.$btn.classList[this.data.opened ? 'add' : 'remove']('is-opened');
	    if (this.$parent) {
	      this.$parent.classList[this.data.opened ? 'add' : 'remove']('is-selected');
	    }
	  }
	  connectedCallback() {
	    this.$content = this.querySelector('[data-expand-content');
	    this.$btn = this.querySelector('[data-expand-button');
	    this.$btn.addEventListener('click', this.toggle, false);
	    this.$content.style.display = 'none';
	    let node = this.parentNode;
	    while (node && node !== document) {
	      if (node.hasAttribute('data-expandable-parent')) {
	        this.$parent = node;
	        break;
	      }
	      node = node.parentNode;
	    }
	  }
	  disconnectedCallback() {
	    this.$btn.removeEventListener('click', this.toggle, false);
	  }
	}
	customElements.define('core-expandable', CoreExpandable);

	class CoreTabs extends HTMLElement {
	  constructor() {
	    super();
	    this.onButtonDown = this.onButtonDown.bind(this);
	  }
	  connectedCallback() {
	    this.$buttons = this.querySelectorAll('[tab-button]');
	    this.$slides = this.querySelectorAll('[tab-slide]');
	    this.updateQueryParam = this.getAttribute('query-param');
	    this.$buttons.forEach((el, i) => {
	      el.setAttribute('data-index', i);
	      el.addEventListener('click', this.onButtonDown);
	    });
	    const startIndex = this.hasAttribute('selected-index') ? Number(this.getAttribute('selected-index')) : 0;
	    this.$slides.forEach((el, i) => {
	      el.classList[i == startIndex ? 'add' : 'remove']('is-selected');
	    });
	    this.$buttons.forEach((el, i) => {
	      el.classList[i == startIndex ? 'add' : 'remove']('is-selected');
	    });
	  }
	  disconnectedCallback() {
	    this.$buttons.forEach((el, i) => {
	      el.removeEventListener('click', this.onButtonDown);
	    });
	  }
	  onButtonDown(e) {
	    const index = Number(e.currentTarget.getAttribute('data-index'));
	    this.$slides.forEach((el, i) => {
	      el.classList[i == index ? 'add' : 'remove']('is-selected');
	    });
	    this.$buttons.forEach((el, i) => {
	      el.classList[i == index ? 'add' : 'remove']('is-selected');
	    });
	    if (this.updateQueryParam) {
	      const url = new URL(window.location);
	      url.searchParams.set(this.updateQueryParam, index);
	      window.history.pushState({}, '', url);
	    }
	  }
	}
	customElements.define('core-tabs', CoreTabs);

	(function (global, factory) {
	  if (typeof define === 'function' && define.amd) {
	    define([], factory);
	  } else if (typeof exports !== 'undefined') {
	    factory();
	  } else {
	    const mod = {
	      exports: {}
	    };
	    factory();
	    global.FileSaver = mod.exports;
	  }
	})(globalThis, function () {

	  /*
	     * FileSaver.js
	     * A saveAs() FileSaver implementation.
	     *
	     * By Eli Grey, http://eligrey.com
	     *
	     * License : https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md (MIT)
	     * source  : http://purl.eligrey.com/github/FileSaver.js
	     */
	  // The one and only way of getting global scope in all environments
	  // https://stackoverflow.com/q/3277182/1008999
	  const _global = typeof window === 'object' && window.window === window ? window : typeof self === 'object' && self.self === self ? self : typeof global === 'object' && global.global === global ? global : void 0;
	  function bom(blob, opts) {
	    if (typeof opts === 'undefined') {
	      opts = {
	        autoBom: false
	      };
	    } else if (typeof opts !== 'object') {
	      opts = {
	        autoBom: !opts
	      };
	    } // prepend BOM for UTF-8 XML and text/* types (including HTML)
	    // note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF

	    if (opts.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
	      return new Blob([String.fromCharCode(0xFEFF), blob], {
	        type: blob.type
	      });
	    }
	    return blob;
	  }
	  function download(url, name, opts) {
	    const xhr = new XMLHttpRequest();
	    xhr.open('GET', url);
	    xhr.responseType = 'blob';
	    xhr.onload = function () {
	      saveAs(xhr.response, name, opts);
	    };
	    xhr.onerror = function () {};
	    xhr.send();
	  }
	  function corsEnabled(url) {
	    const xhr = new XMLHttpRequest(); // use sync to avoid popup blocker

	    xhr.open('HEAD', url, false);
	    try {
	      xhr.send();
	    } catch (e) {}
	    return xhr.status >= 200 && xhr.status <= 299;
	  } // `a.click()` doesn't work for all browsers (#465)

	  function click(node) {
	    try {
	      node.dispatchEvent(new MouseEvent('click'));
	    } catch (e) {
	      const evt = document.createEvent('MouseEvents');
	      evt.initMouseEvent('click', true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
	      node.dispatchEvent(evt);
	    }
	  } // Detect WebView inside a native macOS app by ruling out all browsers
	  // We just need to check for 'Safari' because all other browsers (besides Firefox) include that too
	  // https://www.whatismybrowser.com/guides/the-latest-user-agent/macos

	  const isMacOSWebView = /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent);
	  var saveAs = _global.saveAs || (
	  // probably in some web worker
	  typeof window !== 'object' || window !== _global ? function saveAs() {}
	  /* noop */
	  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView
	  : 'download' in HTMLAnchorElement.prototype && !isMacOSWebView ? function saveAs(blob, name, opts) {
	    const URL = _global.URL || _global.webkitURL;
	    const a = document.createElement('a');
	    name = name || blob.name || 'download';
	    a.download = name;
	    a.rel = 'noopener'; // tabnabbing
	    // TODO: detect chrome extensions & packaged apps
	    // a.target = '_blank'

	    if (typeof blob === 'string') {
	      // Support regular links
	      a.href = blob;
	      if (a.origin !== location.origin) {
	        corsEnabled(a.href) ? download(blob, name, opts) : click(a, a.target = '_blank');
	      } else {
	        click(a);
	      }
	    } else {
	      // Support blobs
	      a.href = URL.createObjectURL(blob);
	      setTimeout(function () {
	        URL.revokeObjectURL(a.href);
	      }, 4E4); // 40s

	      setTimeout(function () {
	        click(a);
	      }, 0);
	    }
	  } // Use msSaveOrOpenBlob as a second approach
	  : 'msSaveOrOpenBlob' in navigator ? function saveAs(blob, name, opts) {
	    name = name || blob.name || 'download';
	    if (typeof blob === 'string') {
	      if (corsEnabled(blob)) {
	        download(blob, name, opts);
	      } else {
	        const a = document.createElement('a');
	        a.href = blob;
	        a.target = '_blank';
	        setTimeout(function () {
	          click(a);
	        });
	      }
	    } else {
	      navigator.msSaveOrOpenBlob(bom(blob, opts), name);
	    }
	  } // Fallback to using FileReader and a popup
	  : function saveAs(blob, name, opts, popup) {
	    // Open a popup immediately do go around popup blocker
	    // Mostly only available on user interaction and the fileReader is async so...
	    popup = popup || open('', '_blank');
	    if (popup) {
	      popup.document.title = popup.document.body.innerText = 'downloading...';
	    }
	    if (typeof blob === 'string') {
	      return download(blob, name, opts);
	    }
	    const force = blob.type === 'application/octet-stream';
	    const isSafari = /constructor/i.test(_global.HTMLElement) || _global.safari;
	    const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
	    if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== 'undefined') {
	      // Safari doesn't allow downloading of blob URLs
	      const reader = new FileReader();
	      reader.onloadend = function () {
	        let url = reader.result;
	        url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, 'data:attachment/file;');
	        if (popup) {
	          popup.location.href = url;
	        } else {
	          location = url;
	        }
	        popup = null; // reverse-tabnabbing #460
	      };

	      reader.readAsDataURL(blob);
	    } else {
	      const URL = _global.URL || _global.webkitURL;
	      const url = URL.createObjectURL(blob);
	      if (popup) {
	        popup.location = url;
	      } else {
	        location.href = url;
	      }
	      popup = null; // reverse-tabnabbing #460

	      setTimeout(function () {
	        URL.revokeObjectURL(url);
	      }, 4E4); // 40s
	    }
	  });

	  _global.saveAs = saveAs.saveAs = saveAs;
	  if (typeof module !== 'undefined') {
	    module.exports = saveAs;
	  }
	});

	// https://github.com/nwcell/ics.js/blob/master/ics.js
	/* global saveAs, Blob, BlobBuilder, console */
	/* exported ics */

	function ics (uidDomain, prodId) {

	  if (navigator.userAgent.indexOf('MSIE') > -1 && navigator.userAgent.indexOf('MSIE 10') == -1) {
	    return;
	  }
	  if (typeof uidDomain === 'undefined') {
	    uidDomain = 'default';
	  }
	  if (typeof prodId === 'undefined') {
	    prodId = 'Calendar';
	  }
	  const SEPARATOR = navigator.appVersion.indexOf('Win') !== -1 ? '\r\n' : '\n';
	  const calendarEvents = [];
	  const calendarStart = ['BEGIN:VCALENDAR', 'PRODID:' + prodId, 'VERSION:2.0'].join(SEPARATOR);
	  const calendarEnd = SEPARATOR + 'END:VCALENDAR';
	  const BYDAY_VALUES = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
	  return {
	    /**
	     * Returns events array
	     *
	     * @return {Array} Events
	     */
	    events() {
	      return calendarEvents;
	    },
	    /**
	     * Returns calendar
	     *
	     * @return {string} Calendar in iCalendar format
	     */
	    calendar() {
	      return calendarStart + SEPARATOR + calendarEvents.join(SEPARATOR) + calendarEnd;
	    },
	    /**
	     * Add event to the calendar
	     *
	     * @param {string} subject     Subject/Title of event
	     * @param {string} description Description of event
	     * @param {string} location    Location of event
	     * @param {string} begin       Beginning date of event
	     * @param {string} stop        Ending date of event
	     * @param {Object} rrule       Recurrence rule object
	     */
	    addEvent(subject, description, location, begin, stop, rrule) {
	      // I'm not in the mood to make these optional... So they are all required
	      if (typeof subject === 'undefined' || typeof description === 'undefined' || typeof location === 'undefined' || typeof begin === 'undefined' || typeof stop === 'undefined') {
	        return false;
	      }

	      // validate rrule
	      if (rrule) {
	        if (!rrule.rrule) {
	          if (rrule.freq !== 'YEARLY' && rrule.freq !== 'MONTHLY' && rrule.freq !== 'WEEKLY' && rrule.freq !== 'DAILY') {
	            throw "Recurrence rrule frequency must be provided and be one of the following: 'YEARLY', 'MONTHLY', 'WEEKLY', or 'DAILY'";
	          }
	          if (rrule.until) {
	            if (isNaN(Date.parse(rrule.until))) {
	              throw "Recurrence rrule 'until' must be a valid date string";
	            }
	          }
	          if (rrule.interval) {
	            if (isNaN(parseInt(rrule.interval))) {
	              throw "Recurrence rrule 'interval' must be an integer";
	            }
	          }
	          if (rrule.count) {
	            if (isNaN(parseInt(rrule.count))) {
	              throw "Recurrence rrule 'count' must be an integer";
	            }
	          }
	          if (typeof rrule.byday !== 'undefined') {
	            if (Object.prototype.toString.call(rrule.byday) !== '[object Array]') {
	              throw "Recurrence rrule 'byday' must be an array";
	            }
	            if (rrule.byday.length > 7) {
	              throw "Recurrence rrule 'byday' array must not be longer than the 7 days in a week";
	            }

	            // Filter any possible repeats
	            rrule.byday = rrule.byday.filter(function (elem, pos) {
	              return rrule.byday.indexOf(elem) == pos;
	            });
	            for (const d in rrule.byday) {
	              if (BYDAY_VALUES.indexOf(rrule.byday[d]) < 0) {
	                throw "Recurrence rrule 'byday' values must include only the following: 'SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'";
	              }
	            }
	          }
	        }
	      }

	      //TODO add time and time zone? use moment to format?
	      const start_date = new Date(begin);
	      const end_date = new Date(stop);
	      const now_date = new Date();
	      const start_year = ('0000' + start_date.getFullYear().toString()).slice(-4);
	      const start_month = ('00' + (start_date.getMonth() + 1).toString()).slice(-2);
	      const start_day = ('00' + start_date.getDate().toString()).slice(-2);
	      const start_hours = ('00' + start_date.getHours().toString()).slice(-2);
	      const start_minutes = ('00' + start_date.getMinutes().toString()).slice(-2);
	      const start_seconds = ('00' + start_date.getSeconds().toString()).slice(-2);
	      const end_year = ('0000' + end_date.getFullYear().toString()).slice(-4);
	      const end_month = ('00' + (end_date.getMonth() + 1).toString()).slice(-2);
	      const end_day = ('00' + end_date.getDate().toString()).slice(-2);
	      const end_hours = ('00' + end_date.getHours().toString()).slice(-2);
	      const end_minutes = ('00' + end_date.getMinutes().toString()).slice(-2);
	      const end_seconds = ('00' + end_date.getSeconds().toString()).slice(-2);
	      const now_year = ('0000' + now_date.getFullYear().toString()).slice(-4);
	      const now_month = ('00' + (now_date.getMonth() + 1).toString()).slice(-2);
	      const now_day = ('00' + now_date.getDate().toString()).slice(-2);
	      const now_hours = ('00' + now_date.getHours().toString()).slice(-2);
	      const now_minutes = ('00' + now_date.getMinutes().toString()).slice(-2);
	      const now_seconds = ('00' + now_date.getSeconds().toString()).slice(-2);

	      // Since some calendars don't add 0 second events, we need to remove time if there is none...
	      let start_time = '';
	      let end_time = '';
	      if (start_hours + start_minutes + start_seconds + end_hours + end_minutes + end_seconds != 0) {
	        start_time = 'T' + start_hours + start_minutes + start_seconds;
	        end_time = 'T' + end_hours + end_minutes + end_seconds;
	      }
	      const now_time = 'T' + now_hours + now_minutes + now_seconds;
	      const start = start_year + start_month + start_day + start_time;
	      const end = end_year + end_month + end_day + end_time;
	      const now = now_year + now_month + now_day + now_time;

	      // recurrence rrule vars
	      let rruleString;
	      if (rrule) {
	        if (rrule.rrule) {
	          rruleString = rrule.rrule;
	        } else {
	          rruleString = 'rrule:FREQ=' + rrule.freq;
	          if (rrule.until) {
	            const uDate = new Date(Date.parse(rrule.until)).toISOString();
	            rruleString += ';UNTIL=' + uDate.substring(0, uDate.length - 13).replace(/[-]/g, '') + '000000Z';
	          }
	          if (rrule.interval) {
	            rruleString += ';INTERVAL=' + rrule.interval;
	          }
	          if (rrule.count) {
	            rruleString += ';COUNT=' + rrule.count;
	          }
	          if (rrule.byday && rrule.byday.length > 0) {
	            rruleString += ';BYDAY=' + rrule.byday.join(',');
	          }
	        }
	      }
	      new Date().toISOString();
	      let calendarEvent = ['BEGIN:VEVENT', 'UID:' + calendarEvents.length + '@' + uidDomain, 'CLASS:PUBLIC', 'DESCRIPTION:' + description, 'DTSTAMP;VALUE=DATE-TIME:' + now, 'DTSTART;VALUE=DATE-TIME:' + start, 'DTEND;VALUE=DATE-TIME:' + end, 'LOCATION:' + location, 'SUMMARY;LANGUAGE=en-us:' + subject, 'TRANSP:TRANSPARENT', 'END:VEVENT'];
	      if (rruleString) {
	        calendarEvent.splice(4, 0, rruleString);
	      }
	      calendarEvent = calendarEvent.join(SEPARATOR);
	      calendarEvents.push(calendarEvent);
	      return calendarEvent;
	    },
	    /**
	     * Download calendar using the saveAs function from filesave.js
	     *
	     * @param {string} filename Filename
	     * @param {string} ext      Extention
	     */
	    download(filename, ext) {
	      if (calendarEvents.length < 1) {
	        return false;
	      }
	      ext = typeof ext !== 'undefined' ? ext : '.ics';
	      filename = typeof filename !== 'undefined' ? filename : 'calendar';
	      const calendar = calendarStart + SEPARATOR + calendarEvents.join(SEPARATOR) + calendarEnd;
	      let blob;
	      if (navigator.userAgent.indexOf('MSIE 10') === -1) {
	        // chrome or firefox
	        blob = new Blob([calendar]);
	      } else {
	        // ie
	        const bb = new BlobBuilder();
	        bb.append(calendar);
	        blob = bb.getBlob('text/x-vCalendar;charset=' + document.characterSet);
	      }
	      saveAs(blob, filename + ext);
	      return calendar;
	    },
	    /**
	     * Build and return the ical contents
	     */
	    build() {
	      if (calendarEvents.length < 1) {
	        return false;
	      }
	      const calendar = calendarStart + SEPARATOR + calendarEvents.join(SEPARATOR) + calendarEnd;
	      return calendar;
	    }
	  };
	}

	function getDateAndTime(datetime) {
	  try {
	    const [day, month, year, hour, minute, period] = datetime.split(/\/| |:/);
	    let adjustedHour = parseInt(hour);
	    if (period.toLowerCase() === 'pm' && adjustedHour !== 12) {
	      adjustedHour += 12;
	    } else if (period.toLowerCase() === 'am' && adjustedHour === 12) {
	      adjustedHour = 0; // Adjust for 12am to be 00 hour
	    }
	    // Append 'Z' to indicate UTC time
	    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T${adjustedHour.toString().padStart(2, '0')}:${minute.padStart(2, '0')}:00Z`;
	  } catch (error) {
	    return '';
	  }
	}
	class CoreICS extends HTMLElement {
	  constructor() {
	    super();
	    this.onButtonclick = this.onButtonclick.bind(this);
	  }
	  connectedCallback() {
	    const event = {
	      title: this.getAttribute('title'),
	      description: this.getAttribute('description'),
	      location: this.getAttribute('location'),
	      begin: this.getAttribute('begin'),
	      end: this.getAttribute('end'),
	      filename: this.getAttribute('start') || 'microsoft-event'
	    };
	    event.begin = getDateAndTime(event.begin);
	    event.end = getDateAndTime(event.end);
	    this.cal = ics();
	    this.cal.addEvent(event.title, event.description, event.location, event.begin, event.end);
	    this.$btn = this.querySelector('[ics-button]');
	    this.$btn?.addEventListener('click', this.onButtonclick);
	  }
	  disconnectedCallback() {
	    this.$btn?.removeEventListener('click', this.onButtonclick);
	  }
	  onButtonclick(e) {
	    this.cal.download('microsoft-event');
	  }
	}
	customElements.define('core-ics', CoreICS);

	class CoreSelectQuery extends HTMLElement {
	  constructor() {
	    super();
	    this.onChange = this.onChange.bind(this);
	  }
	  onChange(e) {
	    const currentUrl = new URL(window.location);
	    const searchParams = currentUrl.searchParams;
	    searchParams.set(this._name, e.target.value);
	    if (this.hasAttribute('data-params')) {
	      const params = JSON.parse(this.getAttribute('data-params'));
	      for (const k in params) {
	        searchParams.set(k, params[k]);
	      }
	    }
	    currentUrl.search = searchParams.toString();
	    window.location.href = currentUrl.toString();
	  }
	  connectedCallback() {
	    this.querySelector('select')?.addEventListener('change', this.onChange, false);
	    this._name = this.getAttribute('name');
	  }
	  disconnectedCallback() {
	    this.querySelector('select')?.removeEventListener('change', this.onChange, false);
	  }
	}
	customElements.define('core-select-query', CoreSelectQuery);

	class CoreVideo extends HTMLElement {
	  constructor() {
	    super();
	    this.isPlaying = false;
	    this.videoType = null;
	    this.togglePlay = this.togglePlay.bind(this);
	    this.onVideoPlayerReady = this.onVideoPlayerReady.bind(this);
	  }
	  connectedCallback() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.update();
	    }
	    this.autoplay = this.hasAttribute('autoplay');
	    this.videoType = this.getAttribute('type') || 'file';
	    const attrSrc = this.getAttribute('src');
	    this.$videoWrapper = this.querySelector('[data-video-container]');
	    this.$videoWrapper.innerHTML = `<video style="width:100%; height: 100%; object-fit: cover;" data-video loop preload="none" muted playsinline autoplay src="${attrSrc}"></video>`;
	    this.$video = this.querySelector('[data-video]');
	    this.$poster = this.querySelector('[data-poster');
	    this.$playBtn = this.querySelector('[data-play-button]');
	    this.addEventListener('click', this.togglePlay);
	    this.$video.addEventListener('play', () => {
	      this.isPlaying = true;
	      this.toggleVideo('play');
	    });
	    if (this.$video.readyState >= 1) {
	      this.duration = this.$video.duration;
	      this.onVideoReady();
	    } else {
	      this.$video.addEventListener('canplay', this.onVideoPlayerReady, false);
	    }
	  }
	  disconnectedCallback() {
	    this._isAttached = false;
	    this.removeEventListener('click', this.togglePlay);
	  }
	  toggleVideo(action) {
	    this.$video[action]();
	    if (this.$playBtn) {
	      this.$playBtn.ariaPressed = 'play' === action ? 'true' : 'false';
	      this.$playBtn.setAttribute('aria-label', action + ' video');
	    }
	    if (this.$poster) {
	      if ('play' === action) {
	        this.$poster.style.display = 'none';
	      }
	    }
	  }
	  onVideoPlayerReady(event) {
	    this.$video.removeEventListener('canplay', this.onVideoPlayerReady);
	    this.duration = this.$video.duration;
	    this.onVideoReady();
	  }
	  onVideoReady() {
	    this.isReady = true;
	    if (this.autoplay) {
	      this.isPlaying = true;
	      this.toggleVideo('play');
	    }
	  }
	  togglePlay(event) {
	    this.isPlaying = !this.isPlaying;
	    this.toggleVideo(this.isPlaying ? 'play' : 'pause');
	  }
	  getCurrentTime() {
	    return this.$video.currentTime;
	  }
	  update() {
	    if (!this._isAttached) {
	      return;
	    }
	    requestAnimationFrame(() => {
	      this.update();
	    });
	    if (this.isReady) {
	      const progress = this.getCurrentTime() / this.duration;
	      this.style.setProperty('--video-progress', progress);
	    }
	  }
	}
	customElements.define('core-video', CoreVideo);

	// Scripts that need to be in website header.

	let stickyHeader;
	window.addEventListener('load', () => {
	  stickyHeader = document.querySelector('.sticky-header');
	});
	window.addEventListener('scroll', () => {
	  const currentScroll = window.pageYOffset;
	  if (!stickyHeader) {
	    // prevent error on pages without sticky header
	    return;
	  }
	  if (currentScroll >= 70) {
	    stickyHeader.classList.add('is-active');
	    stickyHeader.style.visibility = 'visible';
	    document.documentElement.classList.add('is-header-sticky');
	    document.documentElement.style.setProperty('--stickyHeaderHeight', stickyHeader.clientHeight + 'px');
	  } else if (currentScroll < 70) {
	    stickyHeader.style.visibility = 'hidden';
	    stickyHeader.classList.remove('is-active');
	    document.documentElement.style.setProperty('--stickyHeaderHeight', stickyHeader.clientHeight + 'px');
	    document.documentElement.classList.remove('is-header-sticky');
	  }
	});

	(() => {
	  if (window.YOUTUBE_METAS_DEBUG) {
	    console.debug('YoutubeMetasLoader');
	  }
	  const ytMetaCache = new Map();
	  const getYtMeta = ytID => {
	    if (ytMetaCache.has(ytID)) {
	      return ytMetaCache.get(ytID);
	    }
	    const promise = (async () => {
	      const watch = `https://www.youtube.com/watch?v=${encodeURIComponent(ytID)}`;
	      const oembed = `https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(watch)}`;
	      let ytTitle = '';
	      let ytThumb = '';
	      try {
	        const res = await fetch(oembed, {
	          headers: {
	            Accept: 'application/json'
	          }
	        });
	        if (res.ok) {
	          const j = await res.json();
	          ytTitle = typeof j?.title === 'string' ? j.title : '';
	          ytThumb = typeof j?.thumbnail_url === 'string' ? j.thumbnail_url : '';
	        }
	      } catch (_) {}
	      return {
	        title: ytTitle,
	        thumb: ytThumb
	      };
	    })();
	    ytMetaCache.set(ytID, promise);
	    return promise;
	  };
	  const $YTMetas = document.querySelectorAll('[youtube-meta]');
	  $YTMetas.forEach(async $ytmeta => {
	    const ytID = ($ytmeta.getAttribute('youtube-meta') || '').trim();
	    if (!ytID) {
	      return;
	    }
	    const $img = $ytmeta.querySelector('.js-youtube-poster');
	    const $title = $ytmeta.querySelector('.js-youtube-title');
	    if (!$img && !$title) {
	      return;
	    }
	    const {
	      title: ytTitle,
	      thumb: ytThumb
	    } = await getYtMeta(ytID);
	    if ($title && ytTitle) {
	      $title.textContent = ytTitle;
	    }

	    // Update play button aria-label with YouTube title if available
	    if (ytTitle) {
	      const $playBtn = $ytmeta.querySelector('[data-yt-play-btn]');
	      if ($playBtn) {
	        $playBtn.setAttribute('aria-label', `Play ${ytTitle} video`);
	      }
	    }
	    if ($img && ytThumb) {
	      let maxres = ytThumb;
	      try {
	        const u = new URL(ytThumb);
	        const dir = u.pathname.substring(0, u.pathname.lastIndexOf('/') + 1);
	        u.pathname = dir + 'maxresdefault.jpg';
	        maxres = u.toString();
	      } catch (_) {}
	      // Prefer maxres, fallback to original oEmbed thumbnail
	      $img.onerror = () => {
	        if ($img.src !== ytThumb) {
	          $img.src = ytThumb;
	        }
	      };
	      $img.src = maxres;
	    }
	  });
	})();

	function getPosition(node, scope) {
	  const root = scope || document;
	  const width = node.clientWidth;
	  const height = node.clientHeight;
	  let offsetTop = node.offsetTop;
	  let offsetLeft = node.offsetLeft;
	  while (node && node.offsetParent && node.offsetParent != document && node !== root && root !== node.offsetParent) {
	    offsetTop += node.offsetParent.offsetTop;
	    offsetLeft += node.offsetParent.offsetLeft;
	    node = node.offsetParent;
	  }
	  return {
	    top: offsetTop,
	    left: offsetLeft,
	    width,
	    height
	  };
	}

	// Add Play/pause functionality to GIF images
	jQuery(document).ready(function ($) {
	  const $imgs = document.querySelectorAll('img');
	  function patchImage(img) {
	    const src = img.currentSrc;
	    if (/\.gif$/.test(src)) {
	      if (!document.getElementById('gif-player-styles')) {
	        const styles = document.createElement('style');
	        styles.id = 'gif-player-styles';
	        styles.innerHTML = `
                    figure.wp-block-image {
                        position: relative;
                    }
                    gif-player {
                        display: block;
                        position: absolute;
                        transition: none;
                        top: 0 !important;
                    }
                    gif-player canvas  {
                        transition: none; display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                    }
                    gif-player button  {
                        position: absolute;
                        transition: none;
                        left: 50%;
                        top: 50%;
                        width: 60px;
                        height: 60px;
                        border-radius: 100%;
                        border: none;
                        bottom: 10px;
                        z-index: 3;
                        font-size: 0;
                        background: #000000cc;
                        color: #fff;
                        transform: translate(-50%, -50%);
                        padding: 0;
                        display: flex;
                        align-items: center;
                        border: solid 2px #fff;
                        justify-content: center;
                        backdrop-filter: blur(20px);
                    }
                    gif-player button svg {
                        width: 30px;
                    }
                    gif-player button svg[play-icon] { display:  block;  }
                    gif-player button svg[pause-icon] { display: none; }
                    gif-player.is-playing canvas { opacity: 0; }
                    gif-player.is-playing button svg[play-icon] { display:  none;  }
                    gif-player.is-playing button svg[pause-icon] { display:  block;  }

                    gif-player.is-playing button  {
                        position: absolute;
                        transition: none;
                        right: 15px;
                        bottom: 15px;
                        left: auto; top: auto;
                        transform: none;
                        width: 50px; height: 50px;
                    }
                    gif-player.is-playing button svg {
                        width: 25px;
                    }

                `;
	        document.head.appendChild(styles);
	      }
	      const gifPlayer = document.createElement('gif-player');
	      img.parentNode.appendChild(gifPlayer);
	      gifPlayer.innerHTML = `
                <canvas>
                </canvas>
                <button aria-label="Play Gif">
                    <svg play-icon xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>
                    <svg pause-icon xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>        
                </button>
            `;
	      const $canvas = gifPlayer.querySelector('canvas');
	      const ctx = $canvas.getContext('2d');
	      $canvas.width = img.naturalWidth;
	      $canvas.height = img.naturalHeight;
	      const compStyles = window.getComputedStyle(img);
	      if (compStyles.objectFit) {
	        $canvas.style.objectFit = compStyles.objectFit;
	      }
	      ctx.clearRect(0, 0, img.naturalWidth, img.naturalHeight);
	      ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
	      function onResize() {
	        const {
	          top,
	          left
	        } = getPosition(img, img.offsetParent);
	        gifPlayer.style.width = img.clientWidth + 'px';
	        gifPlayer.style.height = img.clientHeight + 'px';
	        gifPlayer.style.top = top + 'px';
	        gifPlayer.style.left = left + 'px';
	        $canvas.style.width = img.clientWidth + 'px';
	        $canvas.style.height = img.clientHeight + 'px';
	        ctx.clearRect(0, 0, img.naturalWidth, img.naturalHeight);
	        ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
	      }
	      const observer = new ResizeObserver(onResize);
	      observer.observe(img);
	      onResize();
	      const $button = gifPlayer.querySelector('button');
	      gifPlayer.querySelector('[play-icon]');
	      gifPlayer.querySelector('[pause-icon]');
	      let isPlaying = false;
	      gifPlayer.addEventListener('click', e => {
	        isPlaying = !isPlaying;
	        if (isPlaying) {
	          img.style.height = gifPlayer.clientHeight + 'px';
	          img.style.width = gifPlayer.clientWidth + 'px';
	          requestAnimationFrame(() => {
	            const src = img.src;
	            img.src = ''; //restart the gif
	            img.onload = e => {
	              img.onload = null;
	              gifPlayer.classList.add('is-playing');
	              $button.setAttribute('aria-label', 'Pause Gif');
	              img.style.removeProperty('height');
	              img.style.removeProperty('width');
	            };
	            img.src = src;
	          });
	        } else {
	          gifPlayer.classList.remove('is-playing');
	          $button.setAttribute('aria-label', 'Play Gif');
	        }
	      });
	    }
	  }
	  $imgs?.forEach(img => {
	    if (img.complete && img.naturalHeight !== 0) {
	      patchImage(img);
	    } else {
	      img.onload = () => {
	        img.onload = null;
	        patchImage(img);
	      };
	    }
	  });
	});

	// Scripts that should lie in website footer.

	/**
	 * Object for creating click-triggered navigation submenus
	 *
	 * Thanks for the inspiration:
	 * 		- https://www.lottejackson.com/learning/a-reusable-javascript-toggle-pattern
	 * 		- https://codepen.io/lottejackson/pen/yObQRM
	 * 		- https://github.com/mrwweb/clicky-menus/
	 */

	(function () {

	  const ClickyMenus = function (menu) {
	    // DOM element(s)
	    let container = menu.parentElement,
	      currentMenuItem,
	      i,
	      len;
	    this.init = function (i) {
	      menuSetup(i);
	      document.addEventListener('click', closeOpenMenu);
	    };

	    /*===================================================
	    =            Menu Open / Close Functions            =
	    ===================================================*/
	    function toggleOnMenuClick(e) {
	      const button = e.currentTarget;

	      // close open menu if there is one
	      if (currentMenuItem && button !== currentMenuItem) {
	        toggleSubmenu(currentMenuItem);
	      }
	      toggleSubmenu(button);
	    }
	    function toggleSubmenu(button) {
	      const submenu = document.getElementById(button.getAttribute('aria-controls'));
	      if ('true' === button.getAttribute('aria-expanded')) {
	        button.setAttribute('aria-expanded', false);
	        submenu.setAttribute('aria-hidden', true);
	        currentMenuItem = false;
	      } else {
	        button.setAttribute('aria-expanded', true);
	        submenu.setAttribute('aria-hidden', false);
	        preventOffScreenSubmenu(submenu);
	        currentMenuItem = button;
	      }
	    }
	    function preventOffScreenSubmenu(submenu) {
	      const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
	        parent = submenu.offsetParent,
	        menuLeftEdge = parent.getBoundingClientRect().left,
	        menuRightEdge = menuLeftEdge + submenu.offsetWidth;
	      if (menuRightEdge + 32 > screenWidth) {
	        // adding 32 so it's not too close
	        submenu.classList.add('sub-menu--right');
	      }
	    }
	    function closeOnEscKey(e) {
	      if (27 === e.keyCode) {
	        // we're in a submenu item
	        if (null !== e.target.closest('ul[aria-hidden="false"]')) {
	          currentMenuItem.focus();
	          toggleSubmenu(currentMenuItem);

	          // we're on a parent item
	        } else if ('true' === e.target.getAttribute('aria-expanded')) {
	          toggleSubmenu(currentMenuItem);
	        }
	      }
	    }
	    function closeOpenMenu(e) {
	      if (currentMenuItem && !e.target.closest('#' + container.id)) {
	        toggleSubmenu(currentMenuItem);
	      }
	    }

	    /*===========================================================
	    =            Modify Menu Markup & Bind Listeners            =
	    =============================================================*/
	    function menuSetup(i) {
	      menu.classList.remove('no-js');

	      /* if parent of menu has no ID, give it one */
	      if (menu.parentElement.id === '') {
	        menu.parentElement.id = 'clicky-menu-' + i;
	      }
	      menu.querySelectorAll('ul').forEach(submenu => {
	        const menuItem = submenu.parentElement;
	        if ('undefined' !== typeof submenu) {
	          const button = convertLinkToButton(menuItem);
	          setUpAria(submenu, button, i);

	          // bind event listener to button
	          button.addEventListener('click', toggleOnMenuClick);
	          menu.addEventListener('keyup', closeOnEscKey);
	        }
	      });
	    }

	    /**
	     * Why do this? See https://justmarkup.com/articles/2019-01-21-the-link-to-button-enhancement/
	     *
	     * @param {Object} menuItem
	     */
	    function convertLinkToButton(menuItem) {
	      const link = menuItem.getElementsByTagName('a')[0],
	        linkHTML = link.innerHTML,
	        linkAtts = link.attributes,
	        button = document.createElement('button');
	      if (null !== link) {
	        // copy button attributes and content from link
	        button.innerHTML = linkHTML.trim();
	        for (i = 0, len = linkAtts.length; i < len; i++) {
	          const attr = linkAtts[i];
	          if ('href' !== attr.name) {
	            button.setAttribute(attr.name, attr.value);
	          }
	        }
	        menuItem.replaceChild(button, link);
	      }
	      return button;
	    }
	    function setUpAria(submenu, button, i) {
	      const submenuId = submenu.getAttribute('id');
	      let id;
	      if (null === submenuId) {
	        id = button.textContent.trim().replace(/\s+/g, '-').toLowerCase() + '-submenu-' + i;
	      } else {
	        id = menuItemId + '-submenu-' + i;
	      }

	      // set button ARIA
	      button.setAttribute('aria-controls', id);
	      button.setAttribute('aria-expanded', false);

	      // set submenu ARIA
	      submenu.setAttribute('id', id);
	      submenu.setAttribute('aria-hidden', true);
	    }
	  };

	  /* Create a ClickMenus object and initiate menu for any menu with .clicky-menu class */
	  document.addEventListener('DOMContentLoaded', function () {
	    const menus = document.querySelectorAll('.clicky-menu');
	    let i = 1;
	    menus.forEach(menu => {
	      const clickyMenu = new ClickyMenus(menu);
	      clickyMenu.init(i);
	      i++;
	    });
	  });

	  /* Xbox Bottom Nav: manage the "more" button */
	  jQuery(document).ready(function ($) {
	    function getPos(node, scope) {
	      const root = scope || document;
	      let top = node.offsetTop;
	      let left = node.offsetLeft;
	      while (node && node.offsetParent && node.offsetParent != document && node !== root && root !== node.offsetParent) {
	        top += node.offsetParent.offsetTop;
	        left += node.offsetParent.offsetLeft;
	        node = node.offsetParent;
	      }
	      return {
	        top,
	        left
	      };
	    }
	    const $xboxBottomNav = document.getElementById('xbox-bottomnav');
	    const $xboxBottomNavMoreBtn = document.getElementById('xbox-bottomnav-more-btn');
	    const $xboxBottomNavMoreList = document.getElementById('xbox-bottomnav-more-list');
	    if ($xboxBottomNav) {
	      let isSubNavExpanded = false;

	      // check if any items of the xbox bottom nav cannot fit on screen
	      // and if so, move it to the 'more' list
	      const xboxBottomNavLeft = getPos($xboxBottomNav).left;
	      const xboxBottomNavWidth = $xboxBottomNav.clientWidth;
	      $xboxBottomNav.querySelectorAll('li').forEach(el => {
	        const {
	          left
	        } = getPos(el);
	        const width = el.clientWidth;
	        if (window.innerWidth < 600 || left + width > xboxBottomNavLeft + xboxBottomNavWidth) {
	          el.parentNode.removeChild(el);
	          $xboxBottomNavMoreList.appendChild(el);
	        }
	      });
	      $xboxBottomNavMoreBtn && $xboxBottomNavMoreBtn.addEventListener('click', e => {
	        isSubNavExpanded = !isSubNavExpanded;
	        if (isSubNavExpanded) {
	          $xboxBottomNavMoreBtn.setAttribute('aria-expanded', true);
	          $xboxBottomNavMoreList.setAttribute('aria-hidden', false);
	          $xboxBottomNavMoreList.style.display = 'block';
	        } else {
	          $xboxBottomNavMoreBtn.setAttribute('aria-expanded', false);
	          $xboxBottomNavMoreList.setAttribute('aria-hidden', true);
	          $xboxBottomNavMoreList.style.display = 'none';
	        }
	      });
	    }

	    /* Instanciate Youtube iframe player when clicking [yt-player-btn] buttons */
	    const $ytPlayersBtn = document.querySelectorAll('[yt-player-btn]');
	    $ytPlayersBtn.forEach($btn => {
	      function initIframe(e) {
	        const videoID = e.currentTarget.getAttribute('yt-video-id');
	        const $target = document.getElementById(e.currentTarget.getAttribute('yt-target-id'));
	        if (!$target) {
	          return;
	        }
	        const $iframe = document.createElement('iframe');
	        $iframe.style.width = '100%';
	        $iframe.style.height = '100%';
	        $iframe.setAttribute('frameborder', 0);
	        $iframe.setAttribute('tabindex', 0);
	        $iframe.setAttribute('allow', 'autoplay; fullscreen');
	        $iframe.setAttribute('src', `https://www.youtube-nocookie.com/embed/${videoID}?autoplay=1&autohide=1&fs=1&modestbranding=1&showinfo=0&controls=2&autoplay=1&rel=0&theme=light&vq=hd720`);
	        $target.appendChild($iframe);
	        requestAnimationFrame(() => {
	          $iframe.focus();
	        });
	      }
	      $btn.addEventListener('click', initIframe);
	    });
	  });
	})();

	/**
	 * jQuery Functions
	 * Wrap everything that requires jQuery in the following.
	 */
	jQuery(document).ready(function ($) {
	  // turn the gallery into a slider

	  $('.mssrc-block-content-gallery .image-gallery__gallery--4 .slick').on('init', function (event, slick) {
	    slick.$slides.each(function (index, slide) {
	      slide.attr('tabindex', '-1');
	    });
	  });
	  $('.mssrc-block-content-gallery .image-gallery__gallery--4 .slick').on('afterChange', function (event, slick, currentSlide) {
	    // Reset tabindex for all slides
	    setTimeout(function () {
	      $('.slick-slide').attr('tabindex', '-1');
	    }, 1000);
	  });
	  $('.mssrc-block-content-gallery .image-gallery__gallery--4 .slick').slick({
	    infinite: false,
	    variableWidth: true,
	    adaptiveHeight: true,
	    centerMode: true,
	    accessibility: true,
	    focusOnChange: true
	  });

	  // infinite scroll
	  $('.results-column').infiniteScroll({
	    path: '.pagination .next',
	    append: '.results-article',
	    history: 'push',
	    hideNav: '.pagination',
	    status: '.results-status',
	    button: '.results-button',
	    scrollThreshold: false
	  });
	});

}));
//# sourceMappingURL=theme.js.map
