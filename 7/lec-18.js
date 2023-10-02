const contacts = [
    {
        name: 'Wali',
        phone: '01965470730',
        email: 'wali@mail.com'
    },
    {
        name: 'Hasib',
        phone: '01960000000',
        email: 'hasib@mail.com'
    },
    {
        name: 'Sakib',
        phone: '01765470730',
        email: 'sakib@mail.com'
    },
    {
        name: 'Rana',
        phone: '01365470730',
        email: 'rana@mail.com'
    },
    {
        name: 'Rakib',
        phone: '01565470730',
        email: 'rakib@mail.com'
    },
];

contacts.sort((a, b) => (a.name).localeCompare(b.name));

const group = contacts.reduce((acc, curr) => {
    let groupName = curr.name.charAt(0).toUpperCase();
    if (acc[groupName]) {
        acc[groupName].push(curr);
    } else {
        acc[groupName] = [curr];
    }
    return acc;
}, {});

const diplayList = (group) => {
    console.log('Displaying contact information');
    console.log('------------------------------');

    const keys = Object.keys(group);
    keys.forEach((key) => {
        console.log(`Group: ${key}`);
        console.table(group[key]);
    });
}

diplayList(group);