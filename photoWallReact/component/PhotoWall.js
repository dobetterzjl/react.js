(function(){
	var ImgFigure = React.createClass({
		render:function(){
			return(
					<figure className="img-figure">
						
						<img src={'img/'+this.props.dataSrc.fileName}/>
						<figcaption>{this.props.dataSrc.title}</figcaption>
						<div></div>
					</figure>

				);
		}
	});

	var Controller = React.createClass({
		render:function(){
			return(
				<span/>
				);
		}
	});
	var PhotoWall = React.createClass({
		render:function(){
			var ImgArr=[],
				ConArr=[];
				imgDatas.forEach(function(value,index){
					ImgArr.push(<ImgFigure dataSrc={value} key={index}/>);
					ConArr.push(<Controller key={index}/>);
				});
			return(
					<section className="stage">
						<section>{ImgArr}</section>
						<nav>{ConArr}</nav>
					</section>

				);
		}
	});
	ReactDOM.render(
			<PhotoWall/>,
			document.getElementById('PwApp')
		);

})();