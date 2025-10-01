import QuickThemeIcon from '../../assets/icons/quick-theme.svg';

function QuickTheme () {
    return (
        <div className="absolute top-4 right-4 p-4 w-16">
            <img src={QuickThemeIcon} alt="quick theme icon" />
        </div>
    )
}

export default QuickTheme;