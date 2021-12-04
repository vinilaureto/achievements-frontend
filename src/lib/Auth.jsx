export default function CheckAuth() {
    let token = localStorage.getItem('token')
    let userId = localStorage.getItem('userId')

    if (token == null || userId == null) {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        localStorage.removeItem('email')
        window.location.href = "/login"
    }
    return <></>
}