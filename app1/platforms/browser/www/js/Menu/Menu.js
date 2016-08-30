var Menu = function(){

    var opts;
    
    this.initialize = function (){
      this.$el = $("<div/>");
      this.render();
    };
    
    this.setOptions = function(options){
        opts = options;
        this.render();
    };
    
    this.render = function(){
        this.$el.html(this.template(opts));
        return this;
    };   
    
   
    this.initialize();
    
};