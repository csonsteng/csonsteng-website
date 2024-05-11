const MobileSite = ({ onForceDesktop }) => {
    return (
        <>
        <h4>Hi!! My name is Chloe Sonsteng and this is my website!</h4>

        <p>           
            I am a senior software developer with a focus on C# in Unity. I am always down for new challenges and am constantly pushing myself to grow.
        </p>
        <img 
                    src='images/chloePicture.jpg'
                    alt='Selfie'
                    style={{
                        height: 'auto',
                        maxHeight:'300px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        display: 'block',
                        borderRadius: '5em',
                }}/>
        <p>
                Unfortunately it appears you are on mobile, and my site is intended for desktop viewing. :(
        </p>
        <p> 
                But so you don't leave empty handed, here are links to my <a href={`${process.env.REACT_APP_CDN_URL}pdf/Resume.pdf`} target='_blank' rel='noreferrer'>Resume</a> and <a href='https://www.github.com/csonsteng' target='_blank' rel='noreferrer'>Github</a>.
        </p>
        <p>
            If you really want to see the full site, click <span onClick={onForceDesktop} style={{color: 'var(--color-soft-blue)'}}>here</span>. Be warned not everything will work properly.
        </p>
        </>
    )
}

export default MobileSite;