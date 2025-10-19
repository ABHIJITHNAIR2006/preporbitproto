const topics = [
    {
        topic: 'Arrays',
        questions: [
            { name: 'Two Sum', url: 'https://leetcode.com/problems/two-sum/' },
            { name: 'Rotate Array', url: 'https://leetcode.com/problems/rotate-array/' },
            { name: 'Plus One', url: 'https://www.hackerrank.com/challenges/plus-one/problem' }
        ]
    },
    {
        topic: 'Strings',
        questions: [
            { name: 'Reverse String', url: 'https://leetcode.com/problems/reverse-string/' },
            { name: 'Valid Anagram', url: 'https://leetcode.com/problems/valid-anagram/' },
            { name: 'String Compression', url: 'https://leetcode.com/problems/string-compression/' }
        ]
    },
    {
        topic: 'Linked Lists',
        questions: [
            { name: 'Reverse Linked List', url: 'https://leetcode.com/problems/reverse-linked-list/' },
            { name: 'Merge Two Sorted Lists', url: 'https://leetcode.com/problems/merge-two-sorted-lists/' },
            { name: 'Linked List Cycle', url: 'https://leetcode.com/problems/linked-list-cycle/' }
        ]
    }
];

const topicsContainer = document.getElementById('topics-container');

topics.forEach(topic => {
    const topicElement = document.createElement('div');
    topicElement.classList.add('resource-category');

    const topicTitle = document.createElement('h3');
    topicTitle.textContent = topic.topic;
    topicElement.appendChild(topicTitle);

    const questionList = document.createElement('ul');
    topic.questions.forEach(question => {
        const questionItem = document.createElement('li');
        const questionLink = document.createElement('a');
        questionLink.textContent = question.name;
        questionLink.href = question.url;
        questionLink.target = '_blank'; // Open in new tab
        questionItem.appendChild(questionLink);
        questionList.appendChild(questionItem);
    });

    topicElement.appendChild(questionList);
    topicsContainer.appendChild(topicElement);
});