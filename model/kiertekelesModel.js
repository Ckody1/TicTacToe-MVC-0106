class Kiertekel{
    constructor(tomb){
        this.tomb = tomb;
        /* console.log(this.tomb); */
    }
    getVizszintes(){
        let ellX = "";
        this.tomb.forEach((element, index) => {
            ellX += element.ertek;
            if(index % 3 == 2){
                ellX += "@";
            }
        });
        return ellX;
    }

    getAtlo(){
        let ell = this.tomb[0].ertek + this.tomb[4].ertek + this.tomb[8].ertek + "@";
        ell += this.tomb[2].ertek + this.tomb[4].ertek + this.tomb[6].ertek;
        return ell;
    }

    getFuggoleges(){
        let ellY = "";
        for (let i = 0; i < 3; i++) {
            ellY += this.tomb[i].ertek + this.tomb[i + 3].ertek + this.tomb[i + 6].ertek + "@";
            
        }
        return ellY;
    }

    ellenorzes(){
        let ell =  this.getVizszintes() + "@" + this.getAtlo() + "@" + this.getFuggoleges();
        let allapot = "";
        if(ell.indexOf("ӾӾӾ") >= 0){
            allapot = "Ӿ";
        }else if(ell.indexOf("۝۝۝") >= 0){
            allapot = "۝";
        }
        /* console.log(ell); */
        return allapot;
    }
}