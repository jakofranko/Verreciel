//  Created by Devine Lu Linvega.
//  Copyright © 2017 XXIIVV. All rights reserved.

class Universe extends Empty {
  constructor () {
    // assertArgs(arguments, 0);
    super()
    console.info('^ Universe | Init')

    this.eventView = verreciel.radar.eventView

    this.allLocations = []

    // MARK: Loiqe -

    this.loiqe = verreciel.locations.loiqe.star()
    this.loiqe_spawn = verreciel.locations.loiqe.spawn()
    this.loiqe_harvest = verreciel.locations.loiqe.harvest()
    this.loiqe_city = verreciel.locations.loiqe.city()
    this.loiqe_horadric = verreciel.locations.loiqe.horadric()
    this.loiqe_portal = verreciel.locations.loiqe.portal()
    this.loiqe_satellite = verreciel.locations.loiqe.satellite()
    this.loiqe_port = verreciel.locations.loiqe.port()
    // MARK: Fog
    this.loiqe_fog = verreciel.locations.loiqe.fog()
    this.loiqe_transit = verreciel.locations.loiqe.transit()
    this.loiqe_c_1 = verreciel.locations.loiqe.c_1()
    this.loiqe_transmitter = verreciel.locations.loiqe.transmitter()
    // MARK: Map2
    this.loiqe_cargo = verreciel.locations.loiqe.cargo()

    // MARK: Valen -

    this.valen = verreciel.locations.valen.star()
    this.valen_bank = verreciel.locations.valen.bank()
    this.valen_station = verreciel.locations.valen.station()
    this.valen_portal = verreciel.locations.valen.portal()
    this.valen_harvest = verreciel.locations.valen.harvest()
    this.valen_cargo = verreciel.locations.valen.cargo()
    // MARK: Fog
    this.valen_transit = verreciel.locations.valen.transit()
    this.valen_fog = verreciel.locations.valen.fog()
    this.valen_antenna = verreciel.locations.valen.antenna()
    this.valen_c_1 = verreciel.locations.valen.c_1()
    // MARK: Blind
    this.valen_wreck = verreciel.locations.valen.wreck()

    // MARK: Senni -

    this.senni = verreciel.locations.senni.star()
    this.senni_station = verreciel.locations.senni.station()
    this.senni_cargo = verreciel.locations.senni.cargo()
    this.senni_portal = verreciel.locations.senni.portal()
    this.senni_harvest = verreciel.locations.senni.harvest()
    this.senni_transmitter = verreciel.locations.senni.transmitter()
    // MARK: Fog
    this.senni_transit = verreciel.locations.senni.transit()
    this.senni_horadric = verreciel.locations.senni.horadric()
    this.senni_fog = verreciel.locations.senni.fog()
    this.senni_wreck = verreciel.locations.senni.wreck()
    // MARK: Blind
    this.senni_tower = verreciel.locations.senni.tower()

    // MARK: Usul -

    this.usul = verreciel.locations.usul.star()
    this.usul_portal = verreciel.locations.usul.portal()
    // MARK: Fog
    this.usul_transit = verreciel.locations.usul.transit()
    this.usul_cargo = verreciel.locations.usul.cargo()
    this.usul_telescope = verreciel.locations.usul.telescope()
    this.usul_antenna = verreciel.locations.usul.antenna()

    // MARK: Aitasla -
    this.aitasla = verreciel.locations.aitasla.void()

    this.addLoiqe()
    this.addUsul()
    this.addValen()
    this.addSenni()
    this.addAitasla()
  }

  whenStart () {
    super.whenStart()
    console.info('+ Universe | Start')
    this.connectPaths()
  }

  addLocation (child) {
    // assertArgs(arguments, 1);
    this.allLocations.push(child)
    this.eventView.add(child)
  }

  addLoiqe () {
    // assertArgs(arguments, 0);
    this.addLocation(this.loiqe)
    this.addLocation(this.loiqe_spawn)
    this.addLocation(this.loiqe_harvest)
    this.addLocation(this.loiqe_city)
    this.addLocation(this.loiqe_horadric)
    this.addLocation(this.loiqe_portal)
    this.addLocation(this.loiqe_satellite)
    this.addLocation(this.loiqe_port)
    this.addLocation(this.loiqe_transmitter)
    // map1
    this.addLocation(this.loiqe_fog)
    this.addLocation(this.loiqe_transit)
    // map2
    this.addLocation(this.loiqe_cargo)
    // Constellations
    this.addLocation(this.loiqe_c_1)
  }

  addValen () {
    // assertArgs(arguments, 0);
    this.addLocation(this.valen)
    this.addLocation(this.valen_bank)
    this.addLocation(this.valen_station)
    this.addLocation(this.valen_portal)
    this.addLocation(this.valen_harvest)
    this.addLocation(this.valen_cargo)
    this.addLocation(this.valen_antenna)
    // Fog
    this.addLocation(this.valen_transit)
    this.addLocation(this.valen_fog)
    this.addLocation(this.valen_c_1)
    // Blind
    this.addLocation(this.valen_wreck)
  }

  addSenni () {
    // assertArgs(arguments, 0);
    this.addLocation(this.senni)
    this.addLocation(this.senni_station)
    this.addLocation(this.senni_portal)
    this.addLocation(this.senni_cargo)
    this.addLocation(this.senni_harvest)
    this.addLocation(this.senni_transmitter)
    // Fog
    this.addLocation(this.senni_transit)
    this.addLocation(this.senni_horadric)
    this.addLocation(this.senni_fog)
    this.addLocation(this.senni_wreck)
    // Blind
    this.addLocation(this.senni_tower)
  }

  addUsul () {
    // assertArgs(arguments, 0);
    this.addLocation(this.usul)

    this.addLocation(this.usul_portal)
    // Fog
    this.addLocation(this.usul_cargo)
    this.addLocation(this.usul_transit)
    this.addLocation(this.usul_telescope)
    this.addLocation(this.usul_antenna)
  }

  addAitasla () {
    // assertArgs(arguments, 0);
    this.addLocation(this.aitasla)
  }

  connectPaths () {
    // assertArgs(arguments, 0);
    this.loiqe_city.connect(this.loiqe_satellite)
    this.loiqe_satellite.connect(this.loiqe_portal)
    this.loiqe_horadric.connect(this.loiqe_satellite)
    this.loiqe_fog.connect(this.loiqe_port)

    this.valen_bank.connect(this.valen_portal)
    this.valen_station.connect(this.valen_bank)
    this.valen_harvest.connect(this.valen_bank)
    this.valen_fog.connect(this.valen_portal)
    this.valen_antenna.connect(this.valen_fog)

    this.senni_portal.connect(this.senni_cargo)
    this.senni_cargo.connect(this.senni_portal)
    this.senni_station.connect(this.senni_portal)
    this.senni_fog.connect(this.senni_station)
    this.senni_horadric.connect(this.senni_harvest)

    this.usul_cargo.connect(this.usul_portal)
    this.usul_telescope.connect(this.usul_antenna)
    this.usul_antenna.connect(this.usul_portal)

    // Transits

    this.usul_transit.connect(this.loiqe_transit)
    this.loiqe_transit.connect(this.valen_transit)
    this.valen_transit.connect(this.senni_transit)
    this.senni_transit.connect(this.usul_transit)

    this.loiqe_portal.connect(this.loiqe_transit)
    this.valen_portal.connect(this.valen_transit)
    this.senni_portal.connect(this.senni_transit)
    this.usul_portal.connect(this.usul_transit)
  }

  locationLike (target) {
    // assertArgs(arguments, 1);
    for (let location of this.allLocations) {
      if (location.name == target.name && location.system == target.system) {
        return location
      }
    }

    return null
  }

  locationWithCode (code) {
    // assertArgs(arguments, 1);
    for (let location of this.allLocations) {
      if (location.code == code) {
        return location
      }
    }
    return null
  }
}
