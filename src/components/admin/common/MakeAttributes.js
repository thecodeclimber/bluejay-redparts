import axios from 'axios';
import * as $ from 'jquery';

export const makeAttributes = () => {
    let attributes = [];
    let parent_label = $('.chakra-checkbox.attribute.css-1uiwwan');
    parent_label.each(function () {
        let parent_attr = $(this).find('span').attr('data-checked');
        if (typeof parent_attr !== 'undefined' && parent_attr !== false) {
            let parent_key = $(this).find('input').val();
            let values = [];
            let label = $('.attr-value-' + parent_key);
            label.each(function (i, el) {
                let attr = $(this).find('span').attr('data-checked');
                if (typeof attr !== 'undefined' && attr !== false) {
                    var key = $(this).find('input').val();
                    if (values.indexOf(key) != -1)
                        return values.filter((item) => item != key);
                    values.push(key);
                }
            });
            if (values.length !== 0) {
                attributes.push({ attribute: parent_key, values: values });
            }
        }
    });
    return attributes;
};

export const makeSku = (attributes) => {
    let skuList = [];
    attributes.forEach((attribute) => {
        skuList.push(attribute.value)
    });
    let sku = skuList.toString();
    return sku.replaceAll(",", "-");
}
export const getAllCombinations = (arraysToCombine) => {
    var divisors = [];

    if ([0, 1].includes(arraysToCombine.length)) return arraysToCombine;

    for (var i = arraysToCombine.length - 1; i >= 0; i--) {
        divisors[i] = divisors[i + 1]
            ? divisors[i + 1] * arraysToCombine[i + 1].length
            : 1;
    }
    function getPermutation(n, arraysToCombine) {
        var result = [],
            curArray;
        for (var i = 0; i < arraysToCombine.length; i++) {
            curArray = arraysToCombine[i];
            result.push(curArray[Math.floor(n / divisors[i]) % curArray.length]);
        }
        return result.length ? result : [];
    }
    var numPerms = arraysToCombine[0].length;
    for (var i = 1; i < arraysToCombine.length; i++) {
        numPerms *= arraysToCombine[i].length;
    }
    var combinations = [];
    for (var i = 0; i < numPerms; i++) {
        let combo = getPermutation(i, arraysToCombine)
        let index = makeSku(combo);
        combinations[i] = combo;
    }
    return combinations;
};

export const getAttributes = async () => {
    let data = await axios.get(`/api/attributes`);
    return data.data;
};

export const getSingleAttributes = async (ids) => {
    let data = await axios.get(`/api/attributes/${ids}`);
    return data.data;
};

