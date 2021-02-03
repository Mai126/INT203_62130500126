    const app = {
        data() {
            return {
                firstname: 'Noparat',
                lastname: 'Prasongdee',
                msg: '@saimai.126',
                faculty: 'Information Technology, IT#25',
                ID: 62130500126,
                shown: true,
                url: 'https://www.facebook.com/saimaismile2000/',
                url2: 'https://www.instagram.com/saimaismile_/',
                url3: 'https://www.youtube.com/channel/UCJR5tE0WM2_ry9idAxP46eg',
                image: './images/saimai.jpg',
            
            }
        },
        created(){
console.log('message is '+this.msg)
        },
        updated(){
            console.log('message is change to '+this.msg)      
        }
    }
    var mountedApp = Vue.createApp(app).mount('#app')