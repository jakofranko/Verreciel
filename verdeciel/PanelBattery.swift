//
//  PanelConsole.swift
//  Verreciel
//
//  Created by Devine Lu Linvega on 2015-07-07.
//  Copyright (c) 2015 XXIIVV. All rights reserved.
//

import UIKit
import QuartzCore
import SceneKit
import Foundation

class PanelBattery : SCNNode
{
	// Ports
	
	var inputLabel:SCNLabel!
	var outputLabel:SCNLabel!
	var input:SCNPort!
	var output:SCNPort!
	
	var inOxygen:SCNPort!
	var inShield:SCNPort!
	var inRepair:SCNPort!
	
	var outCell1:SCNPort!
	var outCell2:SCNPort!
	var outCell3:SCNPort!
	
	override init()
	{
		super.init()
		name = "battery"
		addInterface()
	}
	
	func addInterface()
	{
		let scale:Float = 0.8
		
		// Draw Radar
		
		self.position = SCNVector3(x: 0, y: 0, z: lowNode[7].z)
		
		// Cells
		
		let distance:Float = 0.4
		
		outCell1 = SCNPort(host: self, polarity: true)
		outCell1.position = SCNVector3(x: -distance, y: 0.3, z: 0)
		self.addChildNode(outCell1)
		let cell1Label = SCNLabel(text: "cell", scale: 0.1, align: alignment.right)
		cell1Label.position = SCNVector3(x: -distance - 0.2, y: 0.3, z: 0)
		self.addChildNode(cell1Label)
		
		outCell2 = SCNPort(host: self, polarity: true)
		outCell2.position = SCNVector3(x: -distance, y: 0, z: 0)
		self.addChildNode(outCell2)
		let cell2Label = SCNLabel(text: "cell", scale: 0.1, align: alignment.right)
		cell2Label.position = SCNVector3(x: -distance - 0.2, y: 0, z: 0)
		self.addChildNode(cell2Label)
		
		outCell3 = SCNPort(host: self, polarity: true)
		outCell3.position = SCNVector3(x: -distance, y: -0.3, z: 0)
		self.addChildNode(outCell3)
		let cell3Label = SCNLabel(text: "cell", scale: 0.1, align: alignment.right)
		cell3Label.position = SCNVector3(x: -distance - 0.2, y: -0.3, z: 0)
		self.addChildNode(cell3Label)
		
		// Systems
		
		inOxygen = SCNPort(host: self, polarity: false)
		inOxygen.position = SCNVector3(x: distance, y: 0.3, z: 0)
		self.addChildNode(inOxygen)
		let oxygenLabel = SCNLabel(text: "oxygen", scale: 0.1, align: alignment.left)
		oxygenLabel.position = SCNVector3(x: distance + 0.2, y: 0.3, z: 0)
		self.addChildNode(oxygenLabel)
		
		inShield = SCNPort(host: self, polarity: false)
		inShield.position = SCNVector3(x: distance, y: 0, z: 0)
		self.addChildNode(inShield)
		let shieldLabel = SCNLabel(text: "shield", scale: 0.1, align: alignment.left)
		shieldLabel.position = SCNVector3(x: distance + 0.2, y: 0, z: 0)
		self.addChildNode(shieldLabel)
		
		let test = SCNPort(host: self, polarity: false)
		test.position = SCNVector3(x: distance, y: -0.3, z: 0)
		self.addChildNode(test)
		let testLabel = SCNLabel(text: "test", scale: 0.1, align: alignment.left)
		testLabel.position = SCNVector3(x: distance + 0.2, y: -0.3, z: 0)
		self.addChildNode(testLabel)
		
		inRepair = SCNPort(host: self, polarity: false)
		inRepair.position = SCNVector3(x: distance, y: -0.6, z: 0)
		self.addChildNode(inRepair)
		let repairLabel = SCNLabel(text: "repair", scale: 0.1, align: alignment.left)
		repairLabel.position = SCNVector3(x: distance + 0.2, y: -0.6, z: 0)
		self.addChildNode(repairLabel)
		
		// Ports
		
		input = SCNPort(host: self, polarity: false)
		input.position = SCNVector3(x: lowNode[7].x * scale + 0.1, y: highNode[7].y * scale, z: 0)
		output = SCNPort(host: self, polarity: true)
		output.position = SCNVector3(x: lowNode[0].x * scale - 0.15, y: highNode[7].y * scale, z: 0)
		
		inputLabel = SCNLabel(text: self.name!, scale: 0.1, align: alignment.left)
		inputLabel.position = SCNVector3(x: lowNode[7].x * scale + 0.3, y: highNode[7].y * scale, z: 0)
		inputLabel.updateWithColor(self.name!, color: grey)
		
		outputLabel = SCNLabel(text: "", scale: 0.1, align: alignment.right)
		outputLabel.position = SCNVector3(x: lowNode[0].x * scale - 0.3, y: highNode[0].y * scale, z: 0)
		outputLabel.updateColor(grey)
		
		self.addChildNode(input)
		self.addChildNode(output)
		self.addChildNode(inputLabel)
		self.addChildNode(outputLabel)
	}
	
	func touch(knobId:String)
	{
		
	}
	
	required init(coder aDecoder: NSCoder)
	{
		fatalError("init(coder:) has not been implemented")
	}
}