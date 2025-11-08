type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px'
      }}
    >
      {children}
    </div>
  )
}

export default Container
