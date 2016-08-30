var Afp = function(){
    var menu;
    
    this.initialize = function(){
        this.$el = $('<div/>');
        menu = new Menu();
        
        var options = [
            {"nombre": "Pantalla Uno", "url": "/uno"},
            {"nombre": "Pantalla Dos", "url": "/dos"},
            {"nombre": "Pantalla Tres", "url": "/tres"},
            {"nombre": "Pantalla Cuatro", "url": "/cuatro"}
        ];
        menu.setOptions(options);
        
        this.render();
    };
    this.render = function(){
        this.$el.html(this.template());
        $('.menu', this.$el).html(menu.$el);
        return this;
    };
    this.initialize();
}