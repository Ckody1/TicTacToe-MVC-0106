class TTTController{
    constructor(){
        const tomb = [];
        new Jatekter(tomb);
        this.info = new InfoView();

        /*Ellenőrizzük azt, hogy van-e győzelem*/

        const kiertekel = new Kiertekel(tomb);
        this.lepes = 0;
        this.info.setkovetkezoJatekos("Ӿ következik");
        $(window).on("kivalaszt", (event)=> {
            /* console.log(event.detail); */
            let aktElem = event.detail;
            if(this.lepes % 2 === 0){
                aktElem.setElem("Ӿ");
                this.info.setkovetkezoJatekos("۝ következik");
            }else{
                aktElem.setElem("۝");
                this.info.setkovetkezoJatekos("Ӿ következik");
            }
            this.lepes ++;

            
            /* console.log(kiertekel.ellenorzes()); */

            if(kiertekel.ellenorzes() === "Ӿ"){
               this. info.setJatekVege("Ӿ nyert");
                this.jatekVege(tomb);
            }else if(kiertekel.ellenorzes() === "۝"){
                this.info.setJatekVege("۝ nyert");
                this.jatekVege(tomb);
            }else if(this.lepes === 9){
                this.info.setJatekVege("Döntetlen");
                this.info.setkovetkezoJatekos("VÉGE");
            }
            
            
        });
    }

    jatekVege(tomb){
        this.info.setkovetkezoJatekos("VÉGE");
        tomb.forEach(element => {
            element.aktivE = false;
        });
    }
}