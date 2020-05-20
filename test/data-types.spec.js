const sinon = require('mocha-sinon');

const convert = require('../src/data-types').convert;
const executeforEach = require('../src/data-types').executeforEach;
const mapArray = require('../src/data-types').mapArray;
const filterArray = require('../src/data-types').filterArray;
const flipOver = require('../src/data-types').flipOver;
const makeListFromRange = require('../src/data-types').makeListFromRange;
const getArrayOfKeys = require('../src/data-types').getArrayOfKeys;
const substitute = require('../src/data-types').substitute;
const getPastDay = require('../src/data-types').getPastDay;
const formatDate = require('../src/data-types').formatDate;

describe('convert function testing', () => {
  it('Should return correct array according to function', () => {
    expect(convert(1, '2', 3, '4'))
        .to.eql(['1', 2, '3', 4]);
  });
  it('Should return correct array according to function', () => {
    expect(convert(2, 3, 44, '55', 22))
        .to.eql(['2', '3', '44', 55, '22']);
  });
  it('Should return correct array according to function', () => {
    expect(convert('44', '22', '22', '99', '123'))
        .to.eql([44, 22, 22, 99, 123]);
  });
  it('Should return correct array according to function', () => {
    expect(convert(1, 2, 3, 91919, 213124))
        .to.eql(['1', '2', '3', '91919', '213124']);
  });
});

describe('executeforEach function testing', () => {
  beforeEach(function() {
    this.sinon.stub(console, 'log');
  });
  it('Should return correct logs according to function', () => {
    executeforEach([1,2,3],(el) => {console.log(el * 2)})
    expect( console.log.calledWith(2)).to.be.true;
    expect( console.log.calledWith(4)).to.be.true;
    expect( console.log.calledWith(6)).to.be.true;
    });
  it('Should return correct logs according to function', () => {
    executeforEach([2,12,5,7,6],(el) => {console.log(el * 2)})
    expect( console.log.calledWith(4)).to.be.true;
    expect( console.log.calledWith(24)).to.be.true;
    expect( console.log.calledWith(10)).to.be.true;
    expect( console.log.calledWith(14)).to.be.true;
    expect( console.log.calledWith(12)).to.be.true;
    });
  it('Should return correct logs according to function', () => {
    executeforEach([5,2],(el) => {console.log(el * 2)})
    expect( console.log.calledWith(10)).to.be.true;
    expect( console.log.calledWith(4)).to.be.true;
    });
  it('Should return correct logs according to function', () => {
    executeforEach([18],(el) => {console.log(el * 2)})
    expect( console.log.calledWith(36)).to.be.true;
    });
});

describe('mapArray function testing', () => {
  it('Should return correct array according to function', () => {
    expect(mapArray([2, '5', 8], function(el) {
      return el + 3;
    })).to.eql([5, 8, 11]);
  });
  it('Should return correct array according to function', () => {
    expect(mapArray([5, 2, 7, 2], function(el) {
      return el + 3;
    })).to.eql([8, 5, 10, 5]);
  });
  it('Should return correct array according to function', () => {
    expect(mapArray(['3', '2', '111', '23', '2'], function(el) {
      return el + 3;
    })).to.eql([6, 5, 114, 26, 5]);
  });
  it('Should return correct array according to function', () => {
    expect(mapArray(['3', 15], function(el) {
      return el + 3;
    })).to.eql([6, 18]);
  });
});

describe('filterArray function testing', () => {
  it('Should return correct array according to function', () => {
    expect(filterArray([2, 5, 8], function(el) {
      return el % 2 === 0;
    })).to.eql([2, 8]);
  });
  it('Should return correct array according to function', () => {
    expect(filterArray([11, 22, 33], function(el) {
      return el % 2 === 0;
    })).to.eql([22]);
  });
  it('Should return correct array according to function', () => {
    expect(filterArray([1, 5, 7], function(el) {
      return el % 2 === 0;
    })).to.eql([]);
  });
  it('Should return correct array according to function', () => {
    expect(filterArray([12, 78, 96], function(el) {
      return el % 2 === 0;
    })).to.eql([12, 78, 96]);
  });
});

describe('flipOver function testing', () => {
  it('Should return correct string according to function', () => {
    expect(flipOver('hey world'))
        .to.eql('dlrow yeh');
  });
  it('Should return correct array according to function', () => {
    expect(flipOver('p2'))
        .to.eql('2p');
  });
  it('Should return correct array according to function', () => {
    expect(flipOver('qwerty qwerty 1237 tyere'))
        .to.eql('ereyt 7321 ytrewq ytrewq');
  });
  it('Should return correct array according to function', () => {
    expect(flipOver('w'))
        .to.eql('w');
  });
});

describe('flipOver function testing', () => {
  it('Should return correct string according to function', () => {
    expect(flipOver('hey world'))
        .to.eql('dlrow yeh');
  });
  it('Should return correct array according to function', () => {
    expect(flipOver('p2'))
        .to.eql('2p');
  });
  it('Should return correct array according to function', () => {
    expect(flipOver('qwerty qwerty 1237 tyere'))
        .to.eql('ereyt 7321 ytrewq ytrewq');
  });
  it('Should return correct array according to function', () => {
    expect(flipOver('w'))
        .to.eql('w');
  });
});

describe('makeListFromRange function testing', () => {
  it('Should return correct array according to function', () => {
    expect(makeListFromRange([2, 7]))
        .to.eql([2, 3, 4, 5, 6, 7]);
  });
  it('Should return correct array according to function', () => {
    expect(makeListFromRange([1, 2]))
        .to.eql([1, 2]);
  });
  it('Should return correct array according to function', () => {
    expect(makeListFromRange([15, 23]))
        .to.eql([15, 16, 17, 18, 19, 20, 21, 22, 23]);
  });
  it('Should return correct array according to function', () => {
    expect(makeListFromRange([5]))
        .to.eql([5]);
  });
});

const actors = [
  {name: 'tommy', age: 36},
  {name: 'lee', age: 28},
];

const car = [
  {model: 'mersedes', numbers: 1111},
  {model: 'ferrari', numbers: 1913},
  {model: 'suzuki', numbers: 2823},
  {model: 'infiniti', numbers: 2191},
];

describe('getArrayOfKeys function testing', () => {
  it('Should return correct array according to function', () => {
    expect(getArrayOfKeys(actors, 'age'))
        .to.eql([36, 28]);
  });
  it('Should return correct array according to function', () => {
    expect(getArrayOfKeys(actors, 'name'))
        .to.eql(['tommy', 'lee']);
  });
  it('Should return correct array according to function', () => {
    expect(getArrayOfKeys(car, 'model'))
        .to.eql(['mersedes', 'ferrari', 'suzuki', 'infiniti']);
  });
  it('Should return correct array according to function', () => {
    expect(getArrayOfKeys(car, 'numbers'))
        .to.eql([1111, 1913, 2823, 2191]);
  });
});

describe('substitute function testing', () => {
  it('Should return correct array according to function', () => {
    expect(substitute([58, 14, 48, 2, 31, 29]))
        .to.eql([58, '*', 48, '*', 31, '*']);
  });
  it('Should return correct array according to function', () => {
    expect(substitute([11, 12, 13, 29]))
        .to.eql(['*', '*', '*', '*']);
  });
  it('Should return correct array according to function', () => {
    expect(substitute([44, 30, 31, 66, 55]))
        .to.eql([44, 30, 31, 66, 55]);
  });
  it('Should return correct array according to function', () => {
    expect(substitute([22, 32, 44, 1, -2, 16]))
        .to.eql(['*', 32, 44, '*', '*', '*']);
  });
});

describe('getPastDay function testing', () => {
  it('Should return correct string with date according to function', () => {
    expect(getPastDay(new Date(2019, 0, 2), 1)).to.eql(1);
  });
  it('Should return correct string with date according to function', () => {
    expect(getPastDay(new Date(2019, 0, 2), 2)).to.eql(31);
  });
  it('Should return correct string with date according to function', () => {
    expect(getPastDay(new Date(2019, 0, 2), 365)).to.eql(2);
  });
});

describe('formatDate function testing', () => {
  it('Should return correct string with date according to function', () => {
    expect(formatDate(new Date('6/15/2018 09:15:00')))
        .to.eql('2018/06/15 09:15');
  });
  it('Should return correct string with date according to function', () => {
    expect(formatDate(new Date('2/22/2015 19:12:42')))
        .to.eql('2015/02/22 19:12');
  });
  it('Should return correct string with date according to function', () => {
    expect(formatDate(new Date('3/11/2019 12:15:11')))
        .to.eql('2019/03/11 12:15');
  });
  it('Should return correct string with date according to function', () => {
    expect(formatDate(new Date('5/4/2020 03:22:36')))
        .to.eql('2020/05/04 03:22');
  });
});
