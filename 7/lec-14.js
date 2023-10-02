const links = [
    { name: 'google', url: 'https://google.com' },
    { name: 'facebook', url: 'https://facebook.com' },
    { name: 'amazon', url: 'https://amazon.com' },
];

let template = `<ul>{{links}}</ul>`
const linkList = links.reduce((acc, curr) => {
    acc += `<li><a href="${curr.url}">${curr.name}</a></li>`;
    return acc;
}, '');

template = template.replace('{{links}}', linkList);

console.log(template);