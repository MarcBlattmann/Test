import "./component.css";

export default function OurMembers() {
    return (
      <div className="member-table">
        <p>
            Wir stellen uns vor:
        </p>
        <table>
            <thead>
                <tr>
                    <th>Vorname</th>
                    <th>Nachname</th>
                    <th>Bike Model</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Brandon</td>
                    <td>Semenuk</td>
                    <td>Trek Session</td>
                </tr>
                <tr>
                    <td>Andreu</td>
                    <td>Lacondeguy</td>
                    <td>Commencal Supreme DH</td>
                </tr>
                <tr>
                    <td>Tom</td>
                    <td>Van Steenbergen</td>
                    <td>Hyper Prototype</td>
                </tr>
                <tr>
                    <td>Carson</td>
                    <td>Storch</td>
                    <td>Norco Shore</td>
                </tr>
            </tbody>
        </table>
      </div>
    );
  }