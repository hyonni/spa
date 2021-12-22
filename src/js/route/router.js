import routes from './routes.js';

const router = {
    route : null,
    getRoute(path) {
        path = path || location.pathname;
        this.route = routes[path] || '/';

        console.log(routes[path])
        this.render()
    },
    render(){
        document.querySelector('.container').innerHTML = this.route.render();
    }

};

//뒤로가기할떄 데이터 나오기 위해 
window.addEventListener("popstate", () => {
    router.getRoute();
});

document.addEventListener('DOMContentLoaded', ()=>{
    document.addEventListener('click',(event)=>{
        event.preventDefault();
        const target = event.target.matches('a') ? event.target : null;
        if(!target) return;
        const path = target.getAttribute('href');

        router.getRoute(path);
        
    })
    router.getRoute();
});


export default router.route;