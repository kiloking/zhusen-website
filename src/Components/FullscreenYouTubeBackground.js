import React from 'react'
import ReactPlayer from 'react-player'
function FullscreenYouTubeBackground() {
  const [calcWidth, setCalcWidth] = React.useState(null);
  const recalculateWidth = () => {
    const viewportHeight = window.innerHeight;
    const aspectRatio = 16 / 9;
    const newCalcWidth = viewportHeight * aspectRatio;
    setCalcWidth(newCalcWidth);
  };
  React.useEffect(() => {
      recalculateWidth();

      // 添加窗口大小变化的事件监听器
      window.addEventListener('resize', recalculateWidth);
    
      // 当组件卸载时，移除事件监听器以避免内存泄漏
      return () => {
        window.removeEventListener('resize', recalculateWidth);
      };
    }, [])
  return (
    <div className=" absolute top-0 left-0  w-screen h-screen overflow-hidden ">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=-jeAU_wXCiM"
        width={calcWidth ? calcWidth : '100vw'}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover',
          zIndex: -20,
          opacity: 1,
        }}
        height="100%"
        playing
        loop
        muted
        controls={false}
        config={{
          youtube: {
            playerVars: { frameborder: 0 },
          },
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

    </div>
  )
}

export default FullscreenYouTubeBackground