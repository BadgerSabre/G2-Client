import Repo from "./Repo"

const Github = () => {
    const githubProfiles = [{link: "https://github.com/rasnerk", title: "Keifer Rasner"}, {link: "https://github.com/BadgerSabre", title: "Brandon Dega"}]
    const githubRepos = [{link: "https://github.com/rasnerk/G2-Client", title: "Client"}, {link: "https://github.com/rasnerk/G2-Server", title: "Server"}]

    return (
        <div className='d-flex justify-content-evenly flex-wrap py-4'>
            <Repo data={githubProfiles} header={'contributers'} />
            <Repo data={githubRepos} header={'repos'} />
        </div>
    )
}

export default Github;