import React from 'react'
import { useSelector } from 'react-redux'
import { Chart } from 'react-google-charts'

export const ChartsDisplay = (props) => {
	const alltasks = useSelector((state) => state.allTasks)
	const commentsNo = alltasks.noOfComments ? alltasks.noOfComments : []
	const commentKeys = Object.keys(commentsNo)
	const commentValues = Object.values(commentsNo)
	const temp = []
	const temp2 = [['Student Name', 'No. Of Comments']]
	for (let i = 0; i < commentKeys.length; i++) {
		temp.push([commentKeys[i], commentValues[i]])
	}
	const chartData = [...temp2, ...temp]
	return (
		<>
			<Chart
				width={'500px'}
				height={'300px'}
				chartType='PieChart'
				loader={<div>Loading Chart</div>}
				data={chartData}
				options={{
					title: 'Student Replies',
					is3D: true,
				}}
				rootProps={{ 'data-testid': '1' }}
			/>
			<Chart
				width={'500px'}
				height={'300px'}
				chartType='ScatterChart'
				loader={<div>Loading Chart</div>}
				data={chartData}
				options={{
					title: 'TreandLine',
					hAxis: { title: 'Users' },
					vAxis: { title: 'Replies' },
					legend: 'none',
					trendlines: { 0: {} },
				}}
				rootProps={{ 'data-testid': '1' }}
			/>
		</>
	)
}
