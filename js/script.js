function Model() {

    this.include=function(url) {
        var script=document.createElement('script');
        script.src=url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }


}
function View() {

    this.getHomeButton=function () {
        return document.querySelector(".Home");
    }

    this.getAboutButton=function () {
        return document.querySelector(".About");
    }

    this.getServicesButton=function () {
        return document.querySelector(".Services");
    }

    this.getTeamButton=function () {
        return document.querySelector(".Team");
    }

    this.getDepartmentsButton=function () {
        return document.querySelector(".Departments");
    }
}
function Controller(view,model) {
    this.init=function () {
        var HomeButton=view.getHomeButton();
        var AboutButton=view.getAboutButton();
        var ServicesButton=view.getServicesButton();
        var TeamButton=view.getTeamButton();
        var DepartmentsButton=view.getDepartmentsButton();


        HomeButton.addEventListener("click",this.onHomeButtonClick);
        AboutButton.addEventListener("click",this.onAboutButtonClick);
        ServicesButton.addEventListener("click",this.onServicesButtonClick);
        TeamButton.addEventListener("click",this.onTeamButtonClick);
        DepartmentsButton.addEventListener("click",this.onDepartmentsButtonClick);
    };
this.onHomeButtonClick=function () {
    window.location.href='Index.html';
}
this.onAboutButtonClick=function () {
    window.location.href='About.html';
}
this.onServicesButtonClick=function () {
    window.location.href='Services.html';
}
this.onTeamButtonClick=function () {
    window.location.href='Team.html';
}
this.onDepartmentsButtonClick=function () {
    window.location.href='Departments.html';
}
this.onGalleryButtonClick=function () {
    window.location.href='Gallery.html';
}
this.onBlogButtonClick=function () {
    window.location.href='Blog.html';
}
this.onContactButtonClick=function () {
    window.location.href='Contacts.html';
}
}
(new Controller(new View,new Model)).init();
