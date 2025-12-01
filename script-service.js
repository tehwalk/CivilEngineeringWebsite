const service_content = [
    {
        id: 0,
        title: "Ενεργειακό πιστοποιητικό (ΠΕΑ)",
        desciption: 'Amet et non reprehenderit id commodo enim irure proident adipisicing minim nostrud exercitation. Deserunt qui et sint nisi occaecat labore tempor ea. Commodo nostrud duis mollit occaecat est excepteur adipisicing sit consectetur consectetur officia minim. Culpa qui fugiat culpa incididunt exercitation enim nostrud deserunt. Magna sit sunt eiusmod labore adipisicing cillum mollit irure eu. <br> Adipisicing ullamco ut nostrud anim est cillum. Deserunt eu non eiusmod adipisicing occaecat. Occaecat est est aute duis nulla. Dolore commodo aliquip non incididunt enim est ullamco reprehenderit. Minim nostrud cillum nostrud ullamco aliquip sit ea ea. Laboris aliqua consequat sit aliquip est reprehenderit cillum consequat velit nulla duis consectetur.<br>Sunt cillum duis cillum consequat. Elit sit pariatur deserunt non laboris dolore exercitation ipsum adipisicing et quis aliquip. Consectetur aliqua ullamco et exercitation occaecat ullamco quis consectetur sit sunt ea in id ipsum. Culpa eiusmod ad non sunt est veniam qui veniam quis et nisi cillum duis quis. Dolore reprehenderit nisi sint quis in amet excepteur laboris nulla officia id cupidatat. Commodo deserunt consectetur Lorem occaecat quis voluptate esse.'
    },
    {
        id: 1,
        title: "Οικοδομικές άδειες",
        desciption: 'Amet et non reprehenderit id commodo enim irure proident adipisicing minim nostrud exercitation. Deserunt qui et sint nisi occaecat labore tempor ea. Commodo nostrud duis mollit occaecat est excepteur adipisicing sit consectetur consectetur officia minim. Culpa qui fugiat culpa incididunt exercitation enim nostrud deserunt. Magna sit sunt eiusmod labore adipisicing cillum mollit irure eu. <br> Adipisicing ullamco ut nostrud anim est cillum. Deserunt eu non eiusmod adipisicing occaecat. Occaecat est est aute duis nulla. Dolore commodo aliquip non incididunt enim est ullamco reprehenderit. Minim nostrud cillum nostrud ullamco aliquip sit ea ea. Laboris aliqua consequat sit aliquip est reprehenderit cillum consequat velit nulla duis consectetur.<br>Sunt cillum duis cillum consequat. Elit sit pariatur deserunt non laboris dolore exercitation ipsum adipisicing et quis aliquip. Consectetur aliqua ullamco et exercitation occaecat ullamco quis consectetur sit sunt ea in id ipsum. Culpa eiusmod ad non sunt est veniam qui veniam quis et nisi cillum duis quis. Dolore reprehenderit nisi sint quis in amet excepteur laboris nulla officia id cupidatat. Commodo deserunt consectetur Lorem occaecat quis voluptate esse.'
    },
    {
        id: 2,
        title: "Βεβαιώσεις υπηρεσίας",
        desciption: 'Amet et non reprehenderit id commodo enim irure proident adipisicing minim nostrud exercitation. Deserunt qui et sint nisi occaecat labore tempor ea. Commodo nostrud duis mollit occaecat est excepteur adipisicing sit consectetur consectetur officia minim. Culpa qui fugiat culpa incididunt exercitation enim nostrud deserunt. Magna sit sunt eiusmod labore adipisicing cillum mollit irure eu. <br> Adipisicing ullamco ut nostrud anim est cillum. Deserunt eu non eiusmod adipisicing occaecat. Occaecat est est aute duis nulla. Dolore commodo aliquip non incididunt enim est ullamco reprehenderit. Minim nostrud cillum nostrud ullamco aliquip sit ea ea. Laboris aliqua consequat sit aliquip est reprehenderit cillum consequat velit nulla duis consectetur.<br>Sunt cillum duis cillum consequat. Elit sit pariatur deserunt non laboris dolore exercitation ipsum adipisicing et quis aliquip. Consectetur aliqua ullamco et exercitation occaecat ullamco quis consectetur sit sunt ea in id ipsum. Culpa eiusmod ad non sunt est veniam qui veniam quis et nisi cillum duis quis. Dolore reprehenderit nisi sint quis in amet excepteur laboris nulla officia id cupidatat. Commodo deserunt consectetur Lorem occaecat quis voluptate esse.'
    },
    {
        id: 3,
        title: "Στατικές μελέτες",
        desciption: 'Amet et non reprehenderit id commodo enim irure proident adipisicing minim nostrud exercitation. Deserunt qui et sint nisi occaecat labore tempor ea. Commodo nostrud duis mollit occaecat est excepteur adipisicing sit consectetur consectetur officia minim. Culpa qui fugiat culpa incididunt exercitation enim nostrud deserunt. Magna sit sunt eiusmod labore adipisicing cillum mollit irure eu. <br> Adipisicing ullamco ut nostrud anim est cillum. Deserunt eu non eiusmod adipisicing occaecat. Occaecat est est aute duis nulla. Dolore commodo aliquip non incididunt enim est ullamco reprehenderit. Minim nostrud cillum nostrud ullamco aliquip sit ea ea. Laboris aliqua consequat sit aliquip est reprehenderit cillum consequat velit nulla duis consectetur.<br>Sunt cillum duis cillum consequat. Elit sit pariatur deserunt non laboris dolore exercitation ipsum adipisicing et quis aliquip. Consectetur aliqua ullamco et exercitation occaecat ullamco quis consectetur sit sunt ea in id ipsum. Culpa eiusmod ad non sunt est veniam qui veniam quis et nisi cillum duis quis. Dolore reprehenderit nisi sint quis in amet excepteur laboris nulla officia id cupidatat. Commodo deserunt consectetur Lorem occaecat quis voluptate esse.'
    }
]

function show_service() {
    const title = document.getElementById('service-title');
    const description = document.getElementById('service-text');
    //TODO: Add image parameters
    let params = new URLSearchParams(location.search);
    let id = params.get('id')
    service_content.forEach(element => {
        if (element.id == id) {
            title.innerHTML = element.title;
            description.innerHTML = element.desciption;
        }
    });
}

document.addEventListener('DOMContentLoaded', show_service)



