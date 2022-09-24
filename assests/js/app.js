class Employee {
    constructor(ad, soyad, maas) {

        this.ad = ad;
        this.soyad = soyad;
        this.maas = maas;
    }

    ShowInfo() {
        return this.ad + " " + this.soyad + " " + this.maas
    }
}

class Designer extends Employee {
    constructor(ad, soyad, maas, job) {
        super(ad,soyad,maas)
        this.job = job;
    }
    ShowDesignerInfo() {
        return this.ShowInfo() + " " + this.job;
    }

}

var designer = new Designer("Elvin","Mutellimov" , 100 , "student" );

console.log(designer.ShowDesignerInfo())


function Hello () {

}

class Person {
    
}