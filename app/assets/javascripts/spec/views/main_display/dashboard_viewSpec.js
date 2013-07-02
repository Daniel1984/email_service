describe("Dashboard view spec", function() {

  beforeEach(function(){
    var that = this,
        flag = false;

    require(['views/main_display/dashboard_view'], function(DashboardView) {
      that.view = new DashboardView({ activeTab: 'inbox' });
      flag = true;
    });
    waitsFor(function() {
      return flag;
    });
  });

  afterEach(function() {
    this.view.remove();
  });

  describe("dashboard view rendering:", function() {
    it("should return div with className of  'tabbable'", function() {
      expect($(this.view.render().el)).toBe('div.tabbable');
    });
  });

});
