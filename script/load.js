let allIssues = []; 

const loadAllIssues = () => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then ((data) =>{
        allIssues = data.data
        console.log(allIssues);
        displayIssues(allIssues)
    })


const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

const handleSearch = () => {
    const searchText = searchInput.value.toLowerCase().trim();
    
    
    const filteredIssues = allIssues.filter(issue => {
        return (
            issue.title.toLowerCase().includes(searchText) || 
            issue.description.toLowerCase().includes(searchText)
        );
    });

    
    displayIssues(filteredIssues);
};


searchBtn.addEventListener('click', handleSearch);