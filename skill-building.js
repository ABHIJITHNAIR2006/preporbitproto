const dsaResources = [
    {
        topic: 'Arrays',
        resources: [
            { name: 'GeeksforGeeks - Arrays', url: 'https://www.geeksforgeeks.org/array-data-structure/' },
            { name: 'HackerRank - Arrays', url: 'https://www.hackerrank.com/domains/data-structures/arrays' }
        ]
    },
    {
        topic: 'Strings',
        resources: [
            { name: 'GeeksforGeeks - Strings', url: 'https://www.geeksforgeeks.org/string-data-structure/' },
            { name: 'HackerRank - Strings', url: 'https://www.hackerrank.com/domains/algorithms/strings' }
        ]
    },
    {
        topic: 'Linked Lists',
        resources: [
            { name: 'GeeksforGeeks - Linked List', url: 'https://www.geeksforgeeks.org/data-structures/linked-list/' },
            { name: 'HackerRank - Linked Lists', url: 'https://www.hackerrank.com/domains/data-structures/linked-lists' }
        ]
    }
];

const webDevResources = [
    {
        topic: 'HTML',
        resources: [
            { name: 'MDN Web Docs - HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
            { name: 'W3Schools - HTML', url: 'https://www.w3schools.com/html/' }
        ]
    },
    {
        topic: 'CSS',
        resources: [
            { name: 'MDN Web Docs - CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
            { name: 'W3Schools - CSS', url: 'https://www.w3schools.com/css/' }
        ]
    },
    {
        topic: 'JavaScript',
        resources: [
            { name: 'MDN Web Docs - JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
            { name: 'W3Schools - JavaScript', url: 'https://www.w3schools.com/js/' }
        ]
    }
];

function createResourceList(containerId, resources) {
    const container = document.getElementById(containerId);
    resources.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.classList.add('resource-category');
        
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category.topic;
        categoryElement.appendChild(categoryTitle);
        
        const resourceList = document.createElement('ul');
        category.resources.forEach(resource => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = resource.url;
            link.textContent = resource.name;
            link.target = '_blank'; // Open in new tab
            listItem.appendChild(link);
            resourceList.appendChild(listItem);
        });
        
        categoryElement.appendChild(resourceList);
        container.appendChild(categoryElement);
    });
}

createResourceList('dsa-resources', dsaResources);
createResourceList('web-dev-resources', webDevResources);