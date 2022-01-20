const {test} = QUnit;
let tomb = [
    {ertek: "$"},
    {ertek: "$"},
    {ertek: "$"},
    {ertek: "$"},
    {ertek: "$"},
    {ertek: "$"},
    {ertek: "$"},
    {ertek: "$"},
    {ertek: "$"}
];
let k = new Kiertekel(tomb);

QUnit.module('vizszintes', function (hook){
    test("Létezik a függvény", function(assert){
        assert.ok(k.getVizszintes(), "létezik");
    });

    test("üser tömb", function(assert){
        assert.equal(k.getVizszintes(), "$$$@$$$@$$$@");
    });

    test("Első sor X", function(assert){
        assert.equal(new Kiertekel([
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "$"}
        ]).getVizszintes(), "XXX@$$$@$$$@");
    });
    test("Második sor X", function(assert){
        assert.equal(new Kiertekel([
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "$"}
        ]).getVizszintes(), "$$$@XXX@$$$@");
    });
    test("Harmadik sor X", function(assert){
        assert.equal(new Kiertekel([
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "X"}
        ]).getVizszintes(), "$$$@$$$@XXX@");
    });
    test("egyik sor vége + következő sor eleje X", function(assert){
        assert.equal(new Kiertekel([
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "$"},
            {ertek: "$"}
        ]).getVizszintes(), "$$$@$$X@X$$@");
    });
    test("random helyen X", function(assert){
        assert.equal(new Kiertekel([
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "$"},
            {ertek: "X"},
            {ertek: "$"},
            {ertek: "X"},
            {ertek: "$"},
            {ertek: "X"},
            {ertek: "$"}
        ]).getVizszintes(), "XX$@X$X@$X$@");
    });


    
});
QUnit.module('függőleges', function (hook){
    test("Létezik a függvény", function(assert){
        assert.ok(k.getFuggoleges(), "létezik");
    });

    test("alap", function(assert){
        assert.equal(k.getFuggoleges(), "$$$@$$$@$$$@");
    });

    test("Első oszlop X", function(assert){
        assert.equal(new Kiertekel([
            {ertek: "X"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "X"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "X"},
            {ertek: "$"},
            {ertek: "$"}
        ]).getFuggoleges(), "XXX@$$$@$$$@");
    });
    test("Második oszlop X", function(assert){
        assert.equal(new Kiertekel([
            {ertek: "$"},
            {ertek: "X"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "X"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "X"},
            {ertek: "$"}
        ]).getFuggoleges(), "$$$@XXX@$$$@");
    });
    test("Harmadik oszlop X", function(assert){
        assert.equal(new Kiertekel([
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "X"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "X"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "X"}
        ]).getFuggoleges(), "$$$@$$$@XXX@");
    });
    test("egyik oszlop vége + következő oszlop eleje X", function(assert){
        assert.equal(new Kiertekel([
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "X"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "X"},
            {ertek: "$"}
        ]).getFuggoleges(), "$$$@$$X@X$$@");
    });
    test("random helyen X", function(assert){
        assert.equal(new Kiertekel([
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "X"},
            {ertek: "$"},
            {ertek: "X"},
            {ertek: "$"}
        ]).getFuggoleges(), "X$$@X$X@$X$@");
    });
   


    
});
QUnit.module('átló', function (hook){
    test("Létezik a függvény", function(assert){
        assert.ok(k.getAtlo(), "létezik");
    });

    test("alap", function(assert){
        assert.equal(k.getAtlo(), "$$$@$$$");
    });

    test("Jobbra le áltó X", function(assert){
        assert.equal(new Kiertekel([
            {ertek: "X"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "X"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "X"}
        ]).getAtlo(), "XXX@$X$");
    });
    test("Balra le áltó X", function(assert){
        assert.equal(new Kiertekel([
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "X"},
            {ertek: "$"},
            {ertek: "X"},
            {ertek: "$"},
            {ertek: "X"},
            {ertek: "$"},
            {ertek: "$"}
        ]).getAtlo(), "$X$@XXX");
    });
    test("átlósan üres, a többi helyen X", function(assert){
        assert.equal(new Kiertekel([
            {ertek: "$"},
            {ertek: "X"},
            {ertek: "$"},
            {ertek: "X"},
            {ertek: "$"},
            {ertek: "X"},
            {ertek: "$"},
            {ertek: "X"},
            {ertek: "$"}
        ]).getAtlo(), "$$$@$$$");
    });
    test("random helyen X", function(assert){
        assert.equal(new Kiertekel([
            {ertek: "$"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "$"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "X"},
            {ertek: "$"}
        ]).getAtlo(), "$$$@X$X");
    });


    
});

QUnit.module('ellenőrzés', function (hook){
    test("Létezik a függvény", function(assert){
        assert.ok(k.getVizszintes, "létezik");
    });

    test("X nyert(jobbra le átló)", function(assert){
        assert.equal(new Kiertekel([
            {ertek: "Ӿ"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "Ӿ"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "Ӿ"}
        ]).ellenorzes(), "Ӿ");
    });
    test("X nyert (1 sor)", function(assert){
        assert.equal(new Kiertekel([
            {ertek: "Ӿ"},
            {ertek: "Ӿ"},
            {ertek: "Ӿ"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "$"}
        ]).ellenorzes(), "Ӿ");
    });
    test("O nyert (2 oszlop)", function(assert){
        assert.equal(new Kiertekel([
            {ertek: "$"},
            {ertek: "۝"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "۝"},
            {ertek: "$"},
            {ertek: "$"},
            {ertek: "۝"},
            {ertek: "$"}
        ]).ellenorzes(), "۝");
    });

    test("Döntetlen", function(assert){
        assert.equal(new Kiertekel([
            {ertek: "Ӿ"},
            {ertek: "Ӿ"},
            {ertek: "۝"},
            {ertek: "۝"},
            {ertek: "۝"},
            {ertek: "Ӿ"},
            {ertek: "Ӿ"},
            {ertek: "Ӿ"},
            {ertek: "۝"}
        ]).ellenorzes(), "");
    });


    
});