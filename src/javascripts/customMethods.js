export default function () {

    this.FormatDateTime = function (datetime, isDate = true, isTime = true) {
        if (isDate && isTime)
            return new Date(datetime).toLocaleDateString() + " " + new Date(datetime).toLocaleTimeString();
        else if (isTime)
            return new Date(datetime).toLocaleTimeString();
        else if (isDate)
            return new Date(datetime).toLocaleDateString();
    }

}