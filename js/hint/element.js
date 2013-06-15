var HintElement = function(srcElement, index, key, hintTheme) {
  this.className = 'chromekey-hit-a-hint-' + hintTheme;
  this.index = index;

  this.srcElement = srcElement;
  this.srcElement.addClass(this.className + '-area');

  var top = 0, left = 0;
  if (this.srcElement.get(0).tagName.toLowerCase() == 'area') {
    var coords = this.srcElement.attr('coords').split(',');
    top = coords[1];
    left = coords[0];
  }
  else {
    top  = srcElement.offset().top - 10;
    left = srcElement.offset().left - 10;
  }

  this.tipElement = $('<div>').css({
    'top': top + 'px',
    'left': left + 'px'
  }).addClass(this.className).addClass('chromekey-hit-a-hint-base');

  for (var i in key) {
    this.tipElement.append($('<span>').text(key[i]));
  }
  this.key = key;

  this.tipElement.appendTo($('body'));
};

HintElement.prototype.getElement = function() {
  return this.srcElement;
};

HintElement.prototype.getTipElement = function() {
  return this.tipElement;
};

HintElement.prototype.getKey = function() {
  return this.key;
};

HintElement.prototype.setPushed = function() {
  $(this.tipElement.children()[0]).addClass('chromekey-hit-a-hint-pushed');
};

HintElement.prototype.hideHintTip = function() {
  this.getElement().removeClass(this.className + '-area');
  this.tipElement.fadeOut(100);
};

HintElement.prototype.click = function() {
  var element = this.getElement();

  // if (Mode.getCurrentMode() == ModeList.NHINT_MODE && element.get(0).tagName.toLowerCase() == 'a') {
  //   window.open(element.attr('href'), null);
  // }
  // else {
  //   element.get(0).click();
  // }
  // var e = document.createEvent('MouseEvents');
  // e.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, true, 0, null);
  // element.get(0).dispatchEvent(e);
};
