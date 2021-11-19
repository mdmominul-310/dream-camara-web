const DeleteOrder = (id) => {
    fetch(`https://shielded-citadel-89476.herokuapp.com/order?id=${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    return fetch;
}
export default DeleteOrder;