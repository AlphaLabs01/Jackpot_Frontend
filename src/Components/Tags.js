import React from 'react';
import "../Style/Tags.css";

const Tags =(props)=>{
	return(
		<div className="tags">
			<p>
				{props.tag}
			</p>
		</div>
		)
}
export default Tags;