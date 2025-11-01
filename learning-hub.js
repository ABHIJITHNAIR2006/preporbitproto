class InterviewQuestion extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const question = this.getAttribute('question');
        const answer = this.getAttribute('answer');
        const company = this.getAttribute('company');
        const topic = this.getAttribute('topic');

        this.shadowRoot.innerHTML = `
            <style>
                * { box-sizing: border-box; }
                :host {
                    display: block;
                    height: 100%;
                }
                .card {
                    background: var(--surface-color);
                    border-radius: var(--border-radius);
                    box-shadow: var(--shadow-md);
                    padding: var(--spacing-lg);
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    text-align: left;
                }
                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-lg);
                }
                .question-content {
                    flex-grow: 1;
                }
                .question-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: var(--spacing-sm);
                }
                .question-text {
                    font-weight: 600;
                    font-size: 1.2rem;
                    margin-right: var(--spacing-md);
                }
                .badges {
                    display: flex;
                    gap: var(--spacing-sm);
                    flex-shrink: 0;
                }
                .company-badge, .topic-badge {
                    padding: 0.4rem 0.8rem;
                    border-radius: var(--border-radius);
                    font-size: 0.85rem;
                    font-weight: 500;
                }
                .company-badge {
                    background-color: oklch(90% 0.05 255);
                    color: oklch(40% 0.1 255);
                }
                .topic-badge {
                    background-color: oklch(90% 0.05 160);
                    color: oklch(40% 0.1 160);
                }
                .answer-container {
                    display: none;
                    margin-top: var(--spacing-md);
                    padding-top: var(--spacing-md);
                    border-top: 1px solid oklch(95% 0.01 255);
                }
                .answer-text {
                    white-space: pre-wrap;
                    color: var(--text-muted-color);
                    background-color: var(--bg-color);
                    padding: var(--spacing-md);
                    border-radius: var(--border-radius);
                }
                .toggle-answer-btn {
                    background: none;
                    border: 1px solid var(--primary-color-light);
                    color: var(--primary-color);
                    padding: 0.6rem 1.2rem;
                    border-radius: var(--border-radius);
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    margin-top: var(--spacing-md);
                }
                .toggle-answer-btn:hover {
                    background-color: oklch(95% 0.02 255);
                    border-color: var(--primary-color);
                }
            </style>
            <div class="card">
                <div class="question-content">
                    <div class="question-header">
                        <p class="question-text">${question}</p>
                        <div class="badges">
                            <span class="company-badge">${company}</span>
                            <span class="topic-badge">${topic}</span>
                        </div>
                    </div>
                </div>
                <div class="answer-section">
                    <button class="toggle-answer-btn">Show Answer</button>
                    <div class="answer-container">
                        <p class="answer-text">${answer}</p>
                    </div>
                </div>
            </div>
        `;

        const toggleBtn = this.shadowRoot.querySelector('.toggle-answer-btn');
        const answerContainer = this.shadowRoot.querySelector('.answer-container');

        toggleBtn.addEventListener('click', () => {
            if (answerContainer.style.display === 'block') {
                answerContainer.style.display = 'none';
                toggleBtn.textContent = 'Show Answer';
            } else {
                answerContainer.style.display = 'block';
                toggleBtn.textContent = 'Hide Answer';
            }
        });
    }
}

customElements.define('interview-question', InterviewQuestion);

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
    if (!container) return;
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


const topics = [
    {
        topic: 'Arrays',
        questions: [
            { name: 'Two Sum', url: 'https://leetcode.com/problems/two-sum/' },
            { name: 'Rotate Array', url: 'https://leetcode.com/problems/rotate-array/' },
            { name: 'Plus One', url: 'https://www.hackerrank.com/challenges/plus-one/problem' },
            { name: 'Contains Duplicate', url: 'https://leetcode.com/problems/contains-duplicate/' },
            { name: 'Single Number', url: 'https://leetcode.com/problems/single-number/' },
        ]
    },
    {
        topic: 'Strings',
        questions: [
            { name: 'Reverse String', url: 'https://leetcode.com/problems/reverse-string/' },
            { name: 'Valid Anagram', url: 'https://leetcode.com/problems/valid-anagram/' },
            { name: 'String Compression', url: 'https://leetcode.com/problems/string-compression/' },
            { name: 'First Unique Character in a String', url: 'https://leetcode.com/problems/first-unique-character-in-a-string/' },
            { name: 'Valid Palindrome', url: 'https://leetcode.com/problems/valid-palindrome/' },
        ]
    },
    {
        topic: 'Linked Lists',
        questions: [
            { name: 'Reverse Linked List', url: 'https://leetcode.com/problems/reverse-linked-list/' },
            { name: 'Merge Two Sorted Lists', url: 'https://leetcode.com/problems/merge-two-sorted-lists/' },
            { name: 'Linked List Cycle', url: 'https://leetcode.com/problems/linked-list-cycle/' },
            { name: 'Palindrome Linked List', url: 'https://leetcode.com/problems/palindrome-linked-list/' },
            { name: 'Remove Nth Node From End of List', url: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/' },
        ]
    },
    {
        topic: 'Trees',
        questions: [
            { name: 'Maximum Depth of Binary Tree', url: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/' },
            { name: 'Validate Binary Search Tree', url: 'https://leetcode.com/problems/validate-binary-search-tree/' },
            { name: 'Symmetric Tree', url: 'https://leetcode.com/problems/symmetric-tree/' },
            { name: 'Binary Tree Level Order Traversal', url: 'https://leetcode.com/problems/binary-tree-level-order-traversal/' },
            { name: 'Convert Sorted Array to Binary Search Tree', url: 'https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/' },
        ]
    },
    {
        topic: 'Graphs',
        questions: [
            { name: 'Number of Islands', url: 'https://leetcode.com/problems/number-of-islands/' },
            { name: 'Clone Graph', url: 'https://leetcode.com/problems/clone-graph/' },
            { name: 'Course Schedule', url: 'https://leetcode.com/problems/course-schedule/' },
            { name: 'Pacific Atlantic Water Flow', url: 'https://leetcode.com/problems/pacific-atlantic-water-flow/' },
            { name: 'Rotting Oranges', url: 'https://leetcode.com/problems/rotting-oranges/' },
        ]
    },
    {
        topic: 'Dynamic Programming',
        questions: [
            { name: 'Climbing Stairs', url: 'https://leetcode.com/problems/climbing-stairs/' },
            { name: 'Coin Change', url: 'https://leetcode.com/problems/coin-change/' },
            { name. 'Longest Increasing Subsequence', url: 'https://leetcode.com/problems/longest-increasing-subsequence/' },
            { name: 'Word Break', url: 'https://leetcode.com/problems/word-break/' },
            { name: 'House Robber', url: 'https://leetcode.com/problems/house-robber/' },
        ]
    }
];

const topicsContainer = document.getElementById('topics-container');
if (topicsContainer) {
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
}
