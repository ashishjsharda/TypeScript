class EventAction {

    trigger(delay: number = 0) {

        console.log(`Event triggered in ${delay}s.`);

    }

}

class NotificationEvent extends EventAction {

    sendEmail() {

        console.log("Sending Email");

    }

}

const n=new NotificationEvent();
n.trigger()
n.sendEmail();
n.trigger(10);
