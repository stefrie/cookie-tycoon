export default function CreateForm({ onCreate }) {

    function submitHandler(event) {
        event.preventDefault();
        onCreate({
            id: event.target.location.value,
            location: event.target.location.value,
            hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
        });
        event.target.reset();
    }
    return (
        <form onSubmit={submitHandler}>

            <legend>Create Cookie Stand</legend>

            <div id="location">
                <label id="loctext" htmlFor="location">Location</label>
                <input type="text" name="location" />
            </div>

            <div id="fields">

                <fieldset>
                    <label class="fieldlabel" htmlFor="min-customers">Minimum Customers per Hour</label>
                    <input type="number" name="min-customers" />
                </fieldset>

                <fieldset>
                    <label class="fieldlabel" htmlFor="max-customers">Maximum Customers per Hour</label>
                    <input type="number" name="max-customers" />
                </fieldset>

                <fieldset>
                    <label class="fieldlabel" htmlFor="avg-cookies">Average Cookies per Sale</label>
                    <input type="number" name="avg-cookies" step=".1" />
                </fieldset>
            </div>
			<div id="button">
				<button id="button" type="submit">Create</button>
			</div>
        </form>
    );
}
