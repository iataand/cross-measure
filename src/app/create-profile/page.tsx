import createProfileAction from "./actions";

export default function CreateProfile() {
  return (
    <main>
      <form action={createProfileAction}>
        <label>Type</label>
        <select name="type">
          <option value="musician">Musician</option>
          <option value="band">Band</option>
        </select>
        <label>Band Name</label>
        <input name="bandName" />
        <label>First Name</label>
        <input name="firstName" />
        <label>Last Name</label>
        <input name="lastName" />
        <button type="submit" className="border-2">
          Create Profile
        </button>
      </form>
    </main>
  );
}
