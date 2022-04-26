const nama = 'febrian dimas';
const umur = 33;
const gender = 'Laki - laki';

function highlight(strings, ...values) {
    // let result = '';
    // strings.forEach( (str, i) => {
    //     result += `${str}${values[i] || '' }`;
    // });
    // return result;
    return strings.reduce( (result, str, i) => `${result}${str}<span class="h1">${values[i] || '' }</span>`, '');
}

const str = highlight`Halo, nama saya ${nama}, umur ${umur} tahun ${gender}.`;

document.body.innerHTML = str;