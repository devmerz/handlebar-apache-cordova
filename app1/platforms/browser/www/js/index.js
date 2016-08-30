var app = {
    initialize: function() {
        this.bindEvents();
    },
    
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        Afp.prototype.template = Handlebars.compile($("#afp").html());
        Menu.prototype.template = Handlebars.compile($("#menu-tpl").html());
        PantallaUno.prototype.template = Handlebars.compile($("#pantalla-uno").html());
        PantallaDos.prototype.template = Handlebars.compile($("#pantalla-dos").html());
        
        
        router.addRoute("", function() {
            $("body").html(new Afp().render().$el);
    	});
        router.addRoute("/uno", function() {
            $(".content").html(new PantallaUno().render().$el);
    	});
        router.addRoute("/dos", function() {
            $(".content").html(new PantallaDos().render().$el);
    	});
        router.start();
    },
    
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        console.log('Received Event: ' + id);
    }
};

app.initialize();