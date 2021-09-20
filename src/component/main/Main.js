import MainInbox from './MainInbox';
import MainTop from './MainTop';

function Main() {
    return (
        <div className="flex-grow h-auto overflow-hidden border-r border-gray-200">
            <MainTop />
            <MainInbox />
        </div>
    )
}

export default Main;