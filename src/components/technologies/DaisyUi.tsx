export default function DaisyUi() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            fill="none"
            className="w-full h-full"
        >
            {/* Petal 1 - Top */}
            <ellipse
                cx="100"
                cy="60"
                rx="20"
                ry="35"
                fill="#FF9A56"
                transform="rotate(0 100 100)"
            />
            {/* Petal 2 - Top Right */}
            <ellipse
                cx="130"
                cy="75"
                rx="20"
                ry="35"
                fill="#FFB380"
                transform="rotate(60 100 100)"
            />
            {/* Petal 3 - Bottom Right */}
            <ellipse
                cx="130"
                cy="125"
                rx="20"
                ry="35"
                fill="#FF8A80"
                transform="rotate(120 100 100)"
            />
            {/* Petal 4 - Bottom */}
            <ellipse
                cx="100"
                cy="140"
                rx="20"
                ry="35"
                fill="#FF7A6B"
                transform="rotate(180 100 100)"
            />
            {/* Petal 5 - Bottom Left */}
            <ellipse
                cx="70"
                cy="125"
                rx="20"
                ry="35"
                fill="#FFA07A"
                transform="rotate(240 100 100)"
            />
            {/* Petal 6 - Top Left */}
            <ellipse
                cx="70"
                cy="75"
                rx="20"
                ry="35"
                fill="#FFAB91"
                transform="rotate(300 100 100)"
            />
            {/* Center Circle */}
            <circle cx="100" cy="100" r="25" fill="#FFD54F" />
            {/* Inner Center Detail */}
            <circle cx="100" cy="100" r="15" fill="#FFC107" opacity="0.8" />
        </svg>
    );
}