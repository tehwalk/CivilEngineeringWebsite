const service_content = [
    {
        id: 0,
        title: "Ενεργειακό πιστοποιητικό (ΠΕΑ)",
        desciption: "Το γραφείο μας αναλαμβάνει την έκδοση ενεργειακών πιστοποιητικών (ΠΕΑ). <br> Μη με ρωτάτε τι είναι, εγώ ιστοσελίδες φτιάχνω (και καλά)"
    },
    {
        id: 1,
        title: "Οικοδομικές άδειες",
        desciption: "Το γραφείο μας αναλαμβάνει την έκδοση ενεργειακών πιστοποιητικών (ΠΕΑ). <br> Μη με ρωτάτε τι είναι, εγώ ιστοσελίδες φτιάχνω (και καλά)"
    },
    {
        id: 2,
        title: "Βεβαιώσεις υπηρεσίας",
        desciption: "Το γραφείο μας αναλαμβάνει την έκδοση ενεργειακών πιστοποιητικών (ΠΕΑ). <br> Μη με ρωτάτε τι είναι, εγώ ιστοσελίδες φτιάχνω (και καλά)"
    },
    {
        id: 3,
        title: "Στατικές μελέτες",
        desciption: "Το γραφείο μας αναλαμβάνει την έκδοση ενεργειακών πιστοποιητικών (ΠΕΑ). <br> Μη με ρωτάτε τι είναι, εγώ ιστοσελίδες φτιάχνω (και καλά)"
    }
]

function show_service() {
    const title = document.getElementById('service-title');
    const description = document.getElementById('service-article');
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



