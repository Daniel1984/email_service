describe("Main display index view", function() {

  beforeEach(function(){
    var that = this,
        flag = false;

    require(['views/main_display/index_view'], function(MainIndexView) {
      that.view = new MainIndexView({ path: 'inbox' });
      flag = true;
    });
    waitsFor(function() {
      return flag;
    });
  });

  afterEach(function() {
    this.view.remove();
  });

  describe("main index view rendering:", function() {
    it("should return div with className 'container'", function() {
      expect($(this.view.render().el)).toBe('div.container');
    });
  });

  describe("getEmailType method", function(){
    it("should return 'removed' if path is 'trash'", function() {
      expect(this.view.getEmailType('trash')).toEqual('removed');
    });
    it("should return 'received' if path is 'inbox'", function() {
      expect(this.view.getEmailType('inbox')).toEqual('received');
    });
    it("shouls return 'received' if path is 'sent'", function() {
      expect(this.view.getEmailType('sent')).toEqual('received');
    });
  });

});
