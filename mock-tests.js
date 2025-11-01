const mockTests = [
    { company: 'Google', title: 'Software Engineering Intern' },
    { company: 'Microsoft', title: 'Product Manager' },
    { company: 'Amazon', title: 'Data Science Intern' },
    { company: 'TCS', title: 'Ninja Developer' },
    { company: 'Infosys', title: 'Systems Engineer' },
    { company: 'Wipro', title: 'Project Engineer' },
];

function populateMockTests() {
    const mockTestsContainer = document.querySelector('#mock-tests-container');
    if (mockTestsContainer) {
        mockTests.forEach(test => {
            const testCard = document.createElement('mock-test-card');
            testCard.setAttribute('company', test.company);
            testCard.setAttribute('title', test.title);
            mockTestsContainer.appendChild(testCard);
        });
    }
}

document.addEventListener('DOMContentLoaded', populateMockTests);
