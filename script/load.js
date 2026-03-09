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
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});


}
    const displayIssues = (issues) => {
        const issuesCard = document.getElementById("issues-card")
        issuesCard.innerHTML = ""

        document.getElementById('issue-count').innerText = issues.length;

        issues.forEach(issue => {

            const statusIcon = issue.status === 'open' ? 'assets/open-Status.png' : 'assets/Closed- Status .png';
           const topBarColor = issue.status === 'open' ? 'bg-green-500' : 'bg-purple-500';

         const card = document.createElement('div');
           card.className = "card bg-white shadow-[0px_2px_12px_rgba(0,0,0,0.04)] border border-gray-100 rounded-2xl flex flex-col h-full hover:shadow-md transition-all cursor-pointer overflow-hidden";
        
          card.onclick = () => {
            showDetails(issue); 
        };
        card.innerHTML = `
         <div class="h-1.5 w-full ${topBarColor}"></div>

            <div class="p-6 flex flex-col h-full">
                <div class="flex justify-between items-center mb-4">
                    <div class="flex items-center gap-2">
                        <img src="${statusIcon}" alt="status" class="w-5 h-5 object-contain"> 
                    </div>
                    <span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-pink-50 text-pink-400 border border-pink-100">
                        ${issue.priority}
                    </span>
                </div>

                <h2 class="text-gray-800 font-extrabold text-sm mb-2 line-clamp-2 leading-tight">
                    ${issue.title}
                </h2>

                <p class="text-gray-400 text-[11px] line-clamp-2 mb-5 leading-relaxed">
                    ${issue.description}
                </p>

                <div class="flex gap-2 mb-8">
                    <span class="flex items-center gap-1 px-3 py-1 rounded-full bg-red-50 text-red-400 text-[9px] font-bold border border-red-100">
                         <img src="assets/BugDroid.png" alt="bug" class="w-3 h-3"> BUG
                    </span>
                    <span class="flex items-center gap-1 px-3 py-1 rounded-full bg-orange-50 text-orange-400 text-[9px] font-bold border border-orange-100">
                         <img src="assets/Lifebuoy (1).png" alt="help" class="w-3 h-3"> HELP WANTED
                    </span>
                </div>

                <div class="mt-auto pt-4 border-t border-gray-50">
                    <p class="text-[11px] text-gray-500 font-medium mb-1">
                        #by ${issue.assignee || "Anonymous"}
                    </p>
                    <p class="text-[11px] text-gray-300 font-medium">
                        ${issue.updatedAt ? issue.updatedAt.split('T')[0] : '2026-03-07'}
                    </p>
                </div>
            </div>
        `;