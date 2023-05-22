



const app={


    data(){
        return{
            currentPage:"home",
            links:[
                {id:1,img:'phone.png',name:"Мобильные"},
                {id:2,img:'power-bank.png',name:"Powerbank"},
                {id:3,img:'phone case.png',name:"Phone case"},
                {id:4,img:'gpu-icon.png',name:"Видеокарты"},
                {id:5,img:'cpu.png',name:"Процессоры"},
                {id:6,img:'bike.png',name:"Велосипеды"},
            ],
            popular:[
                {id:1,img:'Airpods.png',name:"Apple AirPods 2 with Charging Case"},
                {id:2,img:'bicycle.png',name:"Велосипед AltairAL 27.5 V FR"},
                {id:3,img:'GPU.png',name:"MSI GeForce GTX 1660 SUPER Gaming"},
            ],
            images:[
                "\thttps://live.staticflickr.com/65535/52913385847_be5c9a2ff2_n.jpg",
                "https://live.staticflickr.com/65535/52914119429_aa0f605fdd_c.jpg",
                "\thttps://live.staticflickr.com/65535/52913385847_be5c9a2ff2_n.jpg",
                "https://live.staticflickr.com/65535/52914119429_aa0f605fdd_c.jpg",



            ],
            info:[
                {title:"MSI GeForce GTX 1660 SUPER Gaming 6gb"},
                {title:"iPhone 14 Теперь Розовый Встроенная память 8/126 ГБЗаряд батареи 3095 мА·ч Основная камера (Мп)12 + 12"},
                {title:"MSI GeForce GTX 1660 SUPER Gaming 6gb"},
            ],
            currentImageIndex: 0,


            isVisible:false,
            isVisiblee:false,
            isVisibleee:false,


           

        };


    },

     computed: {
        currentImage() {
            return this.images[this.currentImageIndex];
        },


    },
    methods: {
        showElement(a) {

            this.isVisible = true;
        },
        hideElement(a) {
            this.isVisible = false;
        },
        showElements(b) {

            this.isVisiblee = true;
        },
        hideElements(b) {
            this.isVisiblee = false;
        },
        showElementss(c) {

            this.isVisibleee = true;
        },
        hideElementss(c) {
            this.isVisibleee = false;
        },
        previousImage() {
            this.currentImageIndex =
                (this.currentImageIndex + this.images.length - 1) % this.images.length;
        },
        nextImage() {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        },
        goToSlide(index) {
            this.currentImageIndex = index;
        },



    },

}




Vue.createApp(app).mount('#app')
