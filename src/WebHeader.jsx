const WebHeader = () => {
    return (

        <div style={{
            height: 'calc(100% - 3px)',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            alignContent: 'stretch',
            borderBottom: 'solid 3px var(--color-grey-purple)'
        }}>
            <span style={{
                  display: 'flex',
                  fontSize: '1.3em',
                  color: 'var(--color-soft-purple)',
                  flexDirection: 'column-reverse',
                  alignContent: 'baseline',
                  marginLeft: '5px',        
                  userSelect: 'none'
            }}>Chloe Sonsteng</span>
            <div style={{
                height: '90%',
                display: 'flex',
                flexDirection: 'row-reverse',
                alignContent: 'center',
                alignSelf: 'center',
                marginRight: '5px',        
                userSelect: 'none'
            }}>
                <a  href='https://www.linkedin.com/in/chloe-sonsteng-05477196/' target='_blank' rel="noreferrer" style={{ width: '27px'}}>
                    <img src='/icons/linkedin.png' alt='linkedin icon' style={{ height: '100%'}}/>
                </a>
                <a  href='mailto:chloe@csonsteng.com' target='_blank' rel="noreferrer" style={{ width: '27px'}}>
                    <img src='/icons/email.png' alt='email icon' style={{ height: '100%'}}/>
                </a>
            </div>
            
        </div>
    )
}
export default WebHeader;