describe("Dashboard view spec", function() {

  beforeEach(function(){
    var that = this,
        flag = false;

    require([
      'views/main_display/compose_email_modal',
      'models/email'
      ], function(ComposeEmailModal, EmailModel) {
        that.model = new EmailModel();
        that.view = new ComposeEmailModal({ model: that.model });
        flag = true;
    });
    waitsFor(function() {
      return flag;
    });
  });

  afterEach(function() {
    this.view.remove();
  });

  describe("Email create modal view:", function() {
    it("should render modal for submiting new email", function() {
      expect($(this.view.el)).toBe('div.modal');
    });
  });

  describe("Send email method", function() {
    it("sould render error if you try to submit empty form", function() {
   //   this.view.sendEmail({preventDefault: new Function()});
  //    expect(this.view.el).toMatch(/error/);
    });
  });

});
