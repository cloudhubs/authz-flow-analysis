let x = {
    "services": [
        {
            "name": "ts-travel-service:12346",
            "calls": [
                {
                    "endpoint": "/api/v1/ticketinfoservice/ticketinfo",
                    "service": "ts-ticketinfo-service:15681",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/travelservice/trip_detail",
                        "POST /api/v1/travelservice/trips/left"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderservice/order/{}/{}",
                    "service": "ts-order-service:12031",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/travelservice/trip_detail",
                        "POST /api/v1/travelservice/trips/left"
                    ]
                },
                {
                    "endpoint": "/api/v1/trainservice/trains/{}",
                    "service": "ts-train-service:14567",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/travelservice/admin_trip",
                        "POST /api/v1/travelservice/trip_detail",
                        "POST /api/v1/travelservice/trips/left",
                        "GET /api/v1/travelservice/train_types/{}"
                    ]
                },
                {
                    "endpoint": "/api/v1/ticketinfoservice/ticketinfo/{}",
                    "service": "ts-ticketinfo-service:15681",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/travelservice/trip_detail",
                        "POST /api/v1/travelservice/trips/left"
                    ]
                },
                {
                    "endpoint": "/api/v1/routeservice/routes/{}",
                    "service": "ts-route-service:11178",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/travelservice/admin_trip",
                        "GET /api/v1/travelservice/routes/{}",
                        "POST /api/v1/travelservice/trip_detail",
                        "POST /api/v1/travelservice/trips/left"
                    ]
                },
                {
                    "endpoint": "/api/v1/seatservice/seats/left_tickets",
                    "service": "ts-seat-service:18898",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/travelservice/trip_detail",
                        "POST /api/v1/travelservice/trips/left"
                    ]
                }
            ],
            "endpoints": [
                {
                    "name": "/api/v1/travelservice/welcome",
                    "code_mapping": "travel.controller.TravelController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/travelservice/train_types/{}",
                    "code_mapping": "travel.controller.TravelController#getTrainTypeByTripId",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/travelservice/routes/{}",
                    "code_mapping": "travel.controller.TravelController#getRouteByTripId",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/travelservice/trips/routes",
                    "code_mapping": "travel.controller.TravelController#getTripsByRouteId",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/travelservice/trips",
                    "code_mapping": "travel.controller.TravelController#createTrip",
                    "return_type": "HttpEntity<?>",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/travelservice/trips/{}",
                    "code_mapping": "travel.controller.TravelController#retrieve",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/travelservice/trips",
                    "code_mapping": "travel.controller.TravelController#updateTrip",
                    "return_type": "HttpEntity",
                    "method": "PUT",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/travelservice/trips/{}",
                    "code_mapping": "travel.controller.TravelController#deleteTrip",
                    "return_type": "HttpEntity",
                    "method": "DELETE",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Trip": {
                            "READ": true,
                            "DELETE": true,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/travelservice/trips/left",
                    "code_mapping": "travel.controller.TravelController#queryInfo",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Config": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "PriceConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/travelservice/trip_detail",
                    "code_mapping": "travel.controller.TravelController#getTripAllDetailInfo",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Config": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "PriceConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/travelservice/trips",
                    "code_mapping": "travel.controller.TravelController#queryAll",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/travelservice/admin_trip",
                    "code_mapping": "travel.controller.TravelController#adminQueryAll",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "admintravel.controller.AdminTravelController",
            "calls": [
                {
                    "endpoint": "/api/v1/travelservice/admin_trip",
                    "service": "ts-travel-service:12346",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/admintravelservice/admintravel"
                    ]
                },
                {
                    "endpoint": "/api/v1/travel2service/admin_trip",
                    "service": "ts-travel2-service:16346",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/admintravelservice/admintravel"
                    ]
                },
                {
                    "endpoint": "/api/v1/travelservice/trips",
                    "service": "ts-travel-service:12346",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/admintravelservice/admintravel"
                    ]
                },
                {
                    "endpoint": "/api/v1/travel2service/trips",
                    "service": "ts-travel2-service:16346",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/admintravelservice/admintravel"
                    ]
                },
                {
                    "endpoint": "/api/v1/travelservice/trips",
                    "service": "ts-travel-service:12346",
                    "method": "PUT",
                    "type": "HTTP",
                    "from": [
                        "PUT /api/v1/admintravelservice/admintravel"
                    ]
                },
                {
                    "endpoint": "/api/v1/travel2service/trips",
                    "service": "ts-travel2-service:16346",
                    "method": "PUT",
                    "type": "HTTP",
                    "from": [
                        "PUT /api/v1/admintravelservice/admintravel"
                    ]
                },
                {
                    "endpoint": "/api/v1/travelservice/trips/{}",
                    "service": "ts-travel-service:12346",
                    "method": "DELETE",
                    "type": "HTTP",
                    "from": [
                        "DELETE /api/v1/admintravelservice/admintravel/{}"
                    ]
                },
                {
                    "endpoint": "/api/v1/travel2service/trips/{}",
                    "service": "ts-travel2-service:16346",
                    "method": "DELETE",
                    "type": "HTTP",
                    "from": [
                        "DELETE /api/v1/admintravelservice/admintravel/{}"
                    ]
                }
            ],
            "endpoints": [
                {
                    "name": "/api/v1/admintravelservice/welcome",
                    "code_mapping": "admintravel.controller.AdminTravelController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/admintravelservice/admintravel",
                    "code_mapping": "admintravel.controller.AdminTravelController#getAllTravels",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/admintravelservice/admintravel",
                    "code_mapping": "admintravel.controller.AdminTravelController#addTravel",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/admintravelservice/admintravel",
                    "code_mapping": "admintravel.controller.AdminTravelController#updateTravel",
                    "return_type": "HttpEntity",
                    "method": "PUT",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/admintravelservice/admintravel/{}",
                    "code_mapping": "admintravel.controller.AdminTravelController#deleteTravel",
                    "return_type": "HttpEntity",
                    "method": "DELETE",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Trip": {
                            "READ": true,
                            "DELETE": true,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "ts-order-other-service:12032",
            "calls": [
                {
                    "endpoint": "/api/v1/stationservice/stations/namelist",
                    "service": "ts-station-service:12345",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/orderOtherService/orderOther/refresh"
                    ]
                }
            ],
            "endpoints": [
                {
                    "name": "/api/v1/orderOtherService/welcome",
                    "code_mapping": "other.controller.OrderOtherController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/orderOtherService/orderOther/tickets",
                    "code_mapping": "other.controller.OrderOtherController#getTicketListByDateAndTripId",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/orderOtherService/orderOther",
                    "code_mapping": "other.controller.OrderOtherController#createNewOrder",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/orderOtherService/orderOther/admin",
                    "code_mapping": "other.controller.OrderOtherController#addcreateNewOrder",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/orderOtherService/orderOther/query",
                    "code_mapping": "other.controller.OrderOtherController#queryOrders",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/orderOtherService/orderOther/refresh",
                    "code_mapping": "other.controller.OrderOtherController#queryOrdersForRefresh",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/orderOtherService/orderOther/{}/{}",
                    "code_mapping": "other.controller.OrderOtherController#calculateSoldTicket",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/orderOtherService/orderOther/price/{}",
                    "code_mapping": "other.controller.OrderOtherController#getOrderPrice",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/orderOtherService/orderOther/orderPay/{}",
                    "code_mapping": "other.controller.OrderOtherController#payOrder",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": true
                        }
                    }
                },
                {
                    "name": "/api/v1/orderOtherService/orderOther/{}",
                    "code_mapping": "other.controller.OrderOtherController#getOrderById",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/orderOtherService/orderOther/status/{}/{}",
                    "code_mapping": "other.controller.OrderOtherController#modifyOrder",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": true
                        }
                    }
                },
                {
                    "name": "/api/v1/orderOtherService/orderOther/security/{}/{}",
                    "code_mapping": "other.controller.OrderOtherController#securityInfoCheck",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/orderOtherService/orderOther",
                    "code_mapping": "other.controller.OrderOtherController#saveOrderInfo",
                    "return_type": "HttpEntity",
                    "method": "PUT",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": true
                        }
                    }
                },
                {
                    "name": "/api/v1/orderOtherService/orderOther/admin",
                    "code_mapping": "other.controller.OrderOtherController#updateOrder",
                    "return_type": "HttpEntity",
                    "method": "PUT",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": true
                        }
                    }
                },
                {
                    "name": "/api/v1/orderOtherService/orderOther/{}",
                    "code_mapping": "other.controller.OrderOtherController#deleteOrder",
                    "return_type": "HttpEntity",
                    "method": "DELETE",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": true,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/orderOtherService/orderOther",
                    "code_mapping": "other.controller.OrderOtherController#findAllOrder",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "rebook.controller.RebookController",
            "calls": [
                {
                    "endpoint": "/api/v1/seatservice/seats",
                    "service": "ts-seat-service:18898",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/rebookservice/rebook/difference",
                        "POST /api/v1/rebookservice/rebook"
                    ]
                },
                {
                    "endpoint": "/api/v1/travelservice/trip_detail",
                    "service": "ts-travel-service:12346",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/rebookservice/rebook/difference",
                        "POST /api/v1/rebookservice/rebook"
                    ]
                },
                {
                    "endpoint": "/api/v1/travel2service/trip_detail",
                    "service": "ts-travel2-service:16346",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/rebookservice/rebook/difference",
                        "POST /api/v1/rebookservice/rebook"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderservice/order",
                    "service": "ts-order-service:12031",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/rebookservice/rebook/difference",
                        "POST /api/v1/rebookservice/rebook"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther",
                    "service": "ts-order-other-service:12032",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/rebookservice/rebook/difference",
                        "POST /api/v1/rebookservice/rebook"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderservice/order",
                    "service": "ts-order-service:12031",
                    "method": "PUT",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/rebookservice/rebook/difference",
                        "POST /api/v1/rebookservice/rebook"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther",
                    "service": "ts-order-other-service:12032",
                    "method": "PUT",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/rebookservice/rebook/difference",
                        "POST /api/v1/rebookservice/rebook"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderservice/order/{}",
                    "service": "ts-order-service:12031",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/rebookservice/rebook/difference",
                        "POST /api/v1/rebookservice/rebook"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther/{}",
                    "service": "ts-order-other-service:12032",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/rebookservice/rebook/difference",
                        "POST /api/v1/rebookservice/rebook"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderservice/order/{}",
                    "service": "ts-order-service:12031",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/rebookservice/rebook/difference",
                        "POST /api/v1/rebookservice/rebook"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther/{}",
                    "service": "ts-order-other-service:12032",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/rebookservice/rebook/difference",
                        "POST /api/v1/rebookservice/rebook"
                    ]
                },
                {
                    "endpoint": "/api/v1/stationservice/stations/name/{}",
                    "service": "ts-station-service:12345",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/rebookservice/rebook/difference",
                        "POST /api/v1/rebookservice/rebook"
                    ]
                },
                {
                    "endpoint": "/api/v1/inside_pay_service/inside_payment/difference",
                    "service": "ts-inside-payment-service:18673",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/rebookservice/rebook/difference"
                    ]
                },
                {
                    "endpoint": "/api/v1/inside_pay_service/inside_payment/drawback/{}/{}",
                    "service": "ts-inside-payment-service:18673",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/rebookservice/rebook"
                    ]
                }
            ],
            "endpoints": [
                {
                    "name": "/api/v1/rebookservice/welcome",
                    "code_mapping": "rebook.controller.RebookController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/rebookservice/rebook/difference",
                    "code_mapping": "rebook.controller.RebookController#payDifference",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Config": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Money": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": true
                        },
                        "PriceConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Payment": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        },
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/rebookservice/rebook",
                    "code_mapping": "rebook.controller.RebookController#rebook",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Config": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "PriceConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Money": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        },
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": true
                        }
                    }
                }
            ]
        },
        {
            "name": "travelplan.controller.TravelPlanController",
            "calls": [
                {
                    "endpoint": "/api/v1/seatservice/seats/left_tickets",
                    "service": "ts-seat-service:18898",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/travelplanservice/travelPlan/cheapest",
                        "POST /api/v1/travelplanservice/travelPlan/minStation",
                        "POST /api/v1/travelplanservice/travelPlan/quickest"
                    ]
                },
                {
                    "endpoint": "/api/v1/routeplanservice/routePlan/cheapestRoute",
                    "service": "ts-route-plan-service:14578",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/travelplanservice/travelPlan/cheapest"
                    ]
                },
                {
                    "endpoint": "/api/v1/routeplanservice/routePlan/quickestRoute",
                    "service": "ts-route-plan-service:14578",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/travelplanservice/travelPlan/quickest"
                    ]
                },
                {
                    "endpoint": "/api/v1/routeplanservice/routePlan/minStopStations",
                    "service": "ts-route-plan-service:14578",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/travelplanservice/travelPlan/minStation"
                    ]
                },
                {
                    "endpoint": "/api/v1/travelservice/trips/left",
                    "service": "ts-travel-service:12346",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/travelplanservice/travelPlan/transferResult"
                    ]
                },
                {
                    "endpoint": "/api/v1/travel2service/trips/left",
                    "service": "ts-travel2-service:16346",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/travelplanservice/travelPlan/transferResult"
                    ]
                },
                {
                    "endpoint": "/api/v1/ticketinfoservice/ticketinfo/{}",
                    "service": "ts-ticketinfo-service:15681",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/travelplanservice/travelPlan/cheapest",
                        "POST /api/v1/travelplanservice/travelPlan/minStation",
                        "POST /api/v1/travelplanservice/travelPlan/quickest"
                    ]
                },
                {
                    "endpoint": "/api/v1/stationservice/stations/namelist",
                    "service": "ts-station-service:12345",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/travelplanservice/travelPlan/cheapest",
                        "POST /api/v1/travelplanservice/travelPlan/minStation",
                        "POST /api/v1/travelplanservice/travelPlan/quickest"
                    ]
                }
            ],
            "endpoints": [
                {
                    "name": "/api/v1/travelplanservice/welcome",
                    "code_mapping": "travelplan.controller.TravelPlanController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/travelplanservice/travelPlan/transferResult",
                    "code_mapping": "travelplan.controller.TravelPlanController#getTransferResult",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Config": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "PriceConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/travelplanservice/travelPlan/cheapest",
                    "code_mapping": "travelplan.controller.TravelPlanController#getByCheapest",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Config": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "PriceConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/travelplanservice/travelPlan/quickest",
                    "code_mapping": "travelplan.controller.TravelPlanController#getByQuickest",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "PriceConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Config": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/travelplanservice/travelPlan/minStation",
                    "code_mapping": "travelplan.controller.TravelPlanController#getByMinStation",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "PriceConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Config": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "ts-consign-price-service:16110",
            "calls": [],
            "endpoints": [
                {
                    "name": "/api/v1/consignpriceservice/welcome",
                    "code_mapping": "consignprice.controller.ConsignPriceController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/consignpriceservice/consignprice/{}/{}",
                    "code_mapping": "consignprice.controller.ConsignPriceController#getPriceByWeightAndRegion",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "ConsignPrice": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/consignpriceservice/consignprice/price",
                    "code_mapping": "consignprice.controller.ConsignPriceController#getPriceInfo",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "ConsignPrice": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/consignpriceservice/consignprice/config",
                    "code_mapping": "consignprice.controller.ConsignPriceController#getPriceConfig",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "ConsignPrice": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/consignpriceservice/consignprice",
                    "code_mapping": "consignprice.controller.ConsignPriceController#modifyPriceConfig",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "ConsignPrice": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "ts-config-service:15679",
            "calls": [],
            "endpoints": [
                {
                    "name": "/api/v1/configservice/welcome",
                    "code_mapping": "config.controller.ConfigController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/configservice/configs",
                    "code_mapping": "config.controller.ConfigController#queryAll",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Config": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/configservice/configs",
                    "code_mapping": "config.controller.ConfigController#createConfig",
                    "return_type": "HttpEntity<?>",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Config": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/configservice/configs",
                    "code_mapping": "config.controller.ConfigController#updateConfig",
                    "return_type": "HttpEntity",
                    "method": "PUT",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Config": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/configservice/configs/{}",
                    "code_mapping": "config.controller.ConfigController#deleteConfig",
                    "return_type": "HttpEntity",
                    "method": "DELETE",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Config": {
                            "READ": true,
                            "DELETE": true,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/configservice/configs/{}",
                    "code_mapping": "config.controller.ConfigController#retrieve",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Config": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "ts-contacts-service:12347",
            "calls": [],
            "endpoints": [
                {
                    "name": "/api/v1/contactservice/contacts/welcome",
                    "code_mapping": "contacts.controller.ContactsController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/contactservice/contacts",
                    "code_mapping": "contacts.controller.ContactsController#getAllContacts",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Contacts": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/contactservice/contacts",
                    "code_mapping": "contacts.controller.ContactsController#createNewContacts",
                    "return_type": "ResponseEntity<Response>",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Contacts": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/contactservice/contacts/admin",
                    "code_mapping": "contacts.controller.ContactsController#createNewContactsAdmin",
                    "return_type": "HttpEntity<?>",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Contacts": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/contactservice/contacts/{}",
                    "code_mapping": "contacts.controller.ContactsController#deleteContacts",
                    "return_type": "HttpEntity",
                    "method": "DELETE",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Contacts": {
                            "READ": true,
                            "DELETE": true,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/contactservice/contacts",
                    "code_mapping": "contacts.controller.ContactsController#modifyContacts",
                    "return_type": "HttpEntity",
                    "method": "PUT",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Contacts": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/contactservice/contacts/account/{}",
                    "code_mapping": "contacts.controller.ContactsController#findContactsByAccountId",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Contacts": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/contactservice/contacts/{}",
                    "code_mapping": "contacts.controller.ContactsController#getContactsByContactsId",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Contacts": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "ts-verification-code-service:15678",
            "calls": [],
            "endpoints": [
                {
                    "name": "/api/v1/verifycode/generate",
                    "code_mapping": "verifycode.controller.VerifyCodeController#imageCode",
                    "return_type": "void",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/verifycode/verify/{}",
                    "code_mapping": "verifycode.controller.VerifyCodeController#verifyCode",
                    "return_type": "boolean",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                }
            ]
        },
        {
            "name": "ts-user-service:12342",
            "calls": [
                {
                    "endpoint": "/api/v1/auth",
                    "service": "ts-auth-service:12340",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/userservice/users/register"
                    ]
                },
                {
                    "endpoint": "/api/v1/users/{}",
                    "service": "ts-auth-service:12340",
                    "method": "DELETE",
                    "type": "HTTP",
                    "from": [
                        "DELETE /api/v1/userservice/users/{}"
                    ]
                }
            ],
            "endpoints": [
                {
                    "name": "/api/v1/userservice/users/hello",
                    "code_mapping": "user.controller.UserController#testHello",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/userservice/users",
                    "code_mapping": "user.controller.UserController#getAllUser",
                    "return_type": "ResponseEntity<Response>",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "User": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/userservice/users/{}",
                    "code_mapping": "user.controller.UserController#getUserByUserName",
                    "return_type": "ResponseEntity<Response>",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "User": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/userservice/users/id/{}",
                    "code_mapping": "user.controller.UserController#getUserByUserId",
                    "return_type": "ResponseEntity<Response>",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "User": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/userservice/users/register",
                    "code_mapping": "user.controller.UserController#registerUser",
                    "return_type": "ResponseEntity<Response>",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "User": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/userservice/users/{}",
                    "code_mapping": "user.controller.UserController#deleteUserById",
                    "return_type": "ResponseEntity<Response>",
                    "method": "DELETE",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "User": {
                            "READ": true,
                            "DELETE": true,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/userservice/users",
                    "code_mapping": "user.controller.UserController#updateUser",
                    "return_type": "ResponseEntity<Response>",
                    "method": "PUT",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "User": {
                            "READ": true,
                            "DELETE": true,
                            "CREATE": false,
                            "UPDATE": true
                        }
                    }
                }
            ]
        },
        {
            "name": "ts-travel2-service:16346",
            "calls": [
                {
                    "endpoint": "/api/v1/ticketinfoservice/ticketinfo",
                    "service": "ts-ticketinfo-service:15681",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/travel2service/trip_detail",
                        "POST /api/v1/travel2service/trips/left"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther/{}/{}",
                    "service": "ts-order-other-service:12032",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/travel2service/trip_detail",
                        "POST /api/v1/travel2service/trips/left"
                    ]
                },
                {
                    "endpoint": "/api/v1/trainservice/trains/{}",
                    "service": "ts-train-service:14567",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/travel2service/admin_trip",
                        "POST /api/v1/travel2service/trip_detail",
                        "POST /api/v1/travel2service/trips/left",
                        "GET /api/v1/travel2service/train_types/{}"
                    ]
                },
                {
                    "endpoint": "/api/v1/ticketinfoservice/ticketinfo/{}",
                    "service": "ts-ticketinfo-service:15681",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/travel2service/trip_detail",
                        "POST /api/v1/travel2service/trips/left"
                    ]
                },
                {
                    "endpoint": "/api/v1/routeservice/routes/{}",
                    "service": "ts-route-service:11178",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/travel2service/admin_trip",
                        "GET /api/v1/travel2service/routes/{}",
                        "POST /api/v1/travel2service/trip_detail",
                        "POST /api/v1/travel2service/trips/left"
                    ]
                },
                {
                    "endpoint": "/api/v1/seatservice/seats/left_tickets",
                    "service": "ts-seat-service:18898",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/travel2service/trip_detail",
                        "POST /api/v1/travel2service/trips/left"
                    ]
                }
            ],
            "endpoints": [
                {
                    "name": "/api/v1/travel2service/welcome",
                    "code_mapping": "travel2.controller.Travel2Controller#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/travel2service/train_types/{}",
                    "code_mapping": "travel2.controller.Travel2Controller#getTrainTypeByTripId",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/travel2service/routes/{}",
                    "code_mapping": "travel2.controller.Travel2Controller#getRouteByTripId",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/travel2service/trips/routes",
                    "code_mapping": "travel2.controller.Travel2Controller#getTripsByRouteId",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/travel2service/trips",
                    "code_mapping": "travel2.controller.Travel2Controller#createTrip",
                    "return_type": "HttpEntity<?>",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/travel2service/trips/{}",
                    "code_mapping": "travel2.controller.Travel2Controller#retrieve",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/travel2service/trips",
                    "code_mapping": "travel2.controller.Travel2Controller#updateTrip",
                    "return_type": "HttpEntity",
                    "method": "PUT",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/travel2service/trips/{}",
                    "code_mapping": "travel2.controller.Travel2Controller#deleteTrip",
                    "return_type": "HttpEntity",
                    "method": "DELETE",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Trip": {
                            "READ": true,
                            "DELETE": true,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/travel2service/trips/left",
                    "code_mapping": "travel2.controller.Travel2Controller#queryInfo",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Config": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "PriceConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/travel2service/trip_detail",
                    "code_mapping": "travel2.controller.Travel2Controller#getTripAllDetailInfo",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "PriceConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Config": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/travel2service/trips",
                    "code_mapping": "travel2.controller.Travel2Controller#queryAll",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/travel2service/admin_trip",
                    "code_mapping": "travel2.controller.Travel2Controller#adminQueryAll",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "execute.controller.ExecuteControlller",
            "calls": [
                {
                    "endpoint": "/api/v1/orderservice/order/status/{}/{}",
                    "service": "ts-order-service:12031",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/executeservice/execute/collected/{}",
                        "GET /api/v1/executeservice/execute/execute/{}"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther/status/{}/{}",
                    "service": "ts-order-other-service:12032",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/executeservice/execute/collected/{}",
                        "GET /api/v1/executeservice/execute/execute/{}"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderservice/order/{}",
                    "service": "ts-order-service:12031",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/executeservice/execute/collected/{}",
                        "GET /api/v1/executeservice/execute/execute/{}"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther/{}",
                    "service": "ts-order-other-service:12032",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/executeservice/execute/collected/{}",
                        "GET /api/v1/executeservice/execute/execute/{}"
                    ]
                }
            ],
            "endpoints": [
                {
                    "name": "/api/v1/executeservice/welcome",
                    "code_mapping": "execute.controller.ExecuteControlller#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/executeservice/execute/execute/{}",
                    "code_mapping": "execute.controller.ExecuteControlller#executeTicket",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": true
                        }
                    }
                },
                {
                    "name": "/api/v1/executeservice/execute/collected/{}",
                    "code_mapping": "execute.controller.ExecuteControlller#collectTicket",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": true
                        }
                    }
                }
            ]
        },
        {
            "name": "ts-consign-service:16111",
            "calls": [
                {
                    "endpoint": "/api/v1/consignpriceservice/consignprice/{}/{}",
                    "service": "ts-consign-price-service:16110",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/consignservice/consigns",
                        "PUT /api/v1/consignservice/consigns"
                    ]
                }
            ],
            "endpoints": [
                {
                    "name": "/api/v1/consignservice/welcome",
                    "code_mapping": "consign.controller.ConsignController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/consignservice/consigns",
                    "code_mapping": "consign.controller.ConsignController#insertConsign",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "ConsignRecord": {
                            "READ": false,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        },
                        "ConsignPrice": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/consignservice/consigns",
                    "code_mapping": "consign.controller.ConsignController#updateConsign",
                    "return_type": "HttpEntity",
                    "method": "PUT",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "ConsignRecord": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": true
                        },
                        "ConsignPrice": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/consignservice/consigns/account/{}",
                    "code_mapping": "consign.controller.ConsignController#findByAccountId",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "ConsignRecord": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/consignservice/consigns/order/{}",
                    "code_mapping": "consign.controller.ConsignController#findByOrderId",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "ConsignRecord": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/consignservice/consigns/{}",
                    "code_mapping": "consign.controller.ConsignController#findByConsignee",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "ConsignRecord": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "adminorder.controller.AdminOrderController",
            "calls": [
                {
                    "endpoint": "/api/v1/orderservice/order",
                    "service": "ts-order-service:12031",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/adminorderservice/adminorder"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther",
                    "service": "ts-order-other-service:12032",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/adminorderservice/adminorder"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderservice/order/{}",
                    "service": "ts-order-service:12031",
                    "method": "DELETE",
                    "type": "HTTP",
                    "from": [
                        "DELETE /api/v1/adminorderservice/adminorder/{}/{}"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther/{}",
                    "service": "ts-order-other-service:12032",
                    "method": "DELETE",
                    "type": "HTTP",
                    "from": [
                        "DELETE /api/v1/adminorderservice/adminorder/{}/{}"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderservice/order/admin",
                    "service": "ts-order-service:12031",
                    "method": "PUT",
                    "type": "HTTP",
                    "from": [
                        "PUT /api/v1/adminorderservice/adminorder"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther/admin",
                    "service": "ts-order-other-service:12032",
                    "method": "PUT",
                    "type": "HTTP",
                    "from": [
                        "PUT /api/v1/adminorderservice/adminorder"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderservice/order/admin",
                    "service": "ts-order-service:12031",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/adminorderservice/adminorder"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther/admin",
                    "service": "ts-order-other-service:12032",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/adminorderservice/adminorder"
                    ]
                }
            ],
            "endpoints": [
                {
                    "name": "/api/v1/adminorderservice/welcome",
                    "code_mapping": "adminorder.controller.AdminOrderController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/adminorderservice/adminorder",
                    "code_mapping": "adminorder.controller.AdminOrderController#getAllOrders",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/adminorderservice/adminorder",
                    "code_mapping": "adminorder.controller.AdminOrderController#addOrder",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/adminorderservice/adminorder",
                    "code_mapping": "adminorder.controller.AdminOrderController#updateOrder",
                    "return_type": "HttpEntity",
                    "method": "PUT",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": true
                        }
                    }
                },
                {
                    "name": "/api/v1/adminorderservice/adminorder/{}/{}",
                    "code_mapping": "adminorder.controller.AdminOrderController#deleteOrder",
                    "return_type": "HttpEntity",
                    "method": "DELETE",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": true,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "ts-order-service:12031",
            "calls": [
                {
                    "endpoint": "/api/v1/stationservice/stations/namelist",
                    "service": "ts-station-service:12345",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/orderservice/order/refresh"
                    ]
                }
            ],
            "endpoints": [
                {
                    "name": "/api/v1/orderservice/welcome",
                    "code_mapping": "order.controller.OrderController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/orderservice/order/tickets",
                    "code_mapping": "order.controller.OrderController#getTicketListByDateAndTripId",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/orderservice/order",
                    "code_mapping": "order.controller.OrderController#createNewOrder",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/orderservice/order/admin",
                    "code_mapping": "order.controller.OrderController#addcreateNewOrder",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/orderservice/order/query",
                    "code_mapping": "order.controller.OrderController#queryOrders",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/orderservice/order/refresh",
                    "code_mapping": "order.controller.OrderController#queryOrdersForRefresh",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/orderservice/order/{}/{}",
                    "code_mapping": "order.controller.OrderController#calculateSoldTicket",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/orderservice/order/price/{}",
                    "code_mapping": "order.controller.OrderController#getOrderPrice",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/orderservice/order/orderPay/{}",
                    "code_mapping": "order.controller.OrderController#payOrder",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": true
                        }
                    }
                },
                {
                    "name": "/api/v1/orderservice/order/{}",
                    "code_mapping": "order.controller.OrderController#getOrderById",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/orderservice/order/status/{}/{}",
                    "code_mapping": "order.controller.OrderController#modifyOrder",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": true
                        }
                    }
                },
                {
                    "name": "/api/v1/orderservice/order/security/{}/{}",
                    "code_mapping": "order.controller.OrderController#securityInfoCheck",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/orderservice/order",
                    "code_mapping": "order.controller.OrderController#saveOrderInfo",
                    "return_type": "HttpEntity",
                    "method": "PUT",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": true
                        }
                    }
                },
                {
                    "name": "/api/v1/orderservice/order/admin",
                    "code_mapping": "order.controller.OrderController#updateOrder",
                    "return_type": "HttpEntity",
                    "method": "PUT",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": true
                        }
                    }
                },
                {
                    "name": "/api/v1/orderservice/order/{}",
                    "code_mapping": "order.controller.OrderController#deleteOrder",
                    "return_type": "HttpEntity",
                    "method": "DELETE",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": true,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/orderservice/order",
                    "code_mapping": "order.controller.OrderController#findAllOrder",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "ts-route-plan-service:14578",
            "calls": [
                {
                    "endpoint": "/api/v1/routeservice/routes/{}/{}",
                    "service": "ts-route-service:11178",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/routeplanservice/routePlan/minStopStations"
                    ]
                },
                {
                    "endpoint": "/api/v1/travelservice/trips/routes",
                    "service": "ts-travel-service:12346",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/routeplanservice/routePlan/minStopStations"
                    ]
                },
                {
                    "endpoint": "/api/v1/travel2service/trips/routes",
                    "service": "ts-travel2-service:16346",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/routeplanservice/routePlan/minStopStations"
                    ]
                },
                {
                    "endpoint": "/api/v1/travelservice/trip_detail",
                    "service": "ts-travel-service:12346",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/routeplanservice/routePlan/minStopStations"
                    ]
                },
                {
                    "endpoint": "/api/v1/travel2service/trip_detail",
                    "service": "ts-travel2-service:16346",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/routeplanservice/routePlan/minStopStations"
                    ]
                },
                {
                    "endpoint": "/api/v1/stationservice/stations/id/{}",
                    "service": "ts-station-service:12345",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/routeplanservice/routePlan/minStopStations"
                    ]
                },
                {
                    "endpoint": "/api/v1/routeservice/routes/{}",
                    "service": "ts-route-service:11178",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/routeplanservice/routePlan/minStopStations"
                    ]
                },
                {
                    "endpoint": "/api/v1/travelservice/trips/left",
                    "service": "ts-travel-service:12346",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/routeplanservice/routePlan/cheapestRoute",
                        "POST /api/v1/routeplanservice/routePlan/quickestRoute"
                    ]
                },
                {
                    "endpoint": "/api/v1/travel2service/trips/left",
                    "service": "ts-travel2-service:16346",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/routeplanservice/routePlan/cheapestRoute",
                        "POST /api/v1/routeplanservice/routePlan/quickestRoute"
                    ]
                },
                {
                    "endpoint": "/api/v1/travelservice/routes/{}",
                    "service": "ts-travel-service:12346",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/routeplanservice/routePlan/cheapestRoute",
                        "POST /api/v1/routeplanservice/routePlan/quickestRoute"
                    ]
                },
                {
                    "endpoint": "/api/v1/travel2service/routes/{}",
                    "service": "ts-travel2-service:16346",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/routeplanservice/routePlan/cheapestRoute",
                        "POST /api/v1/routeplanservice/routePlan/quickestRoute"
                    ]
                }
            ],
            "endpoints": [
                {
                    "name": "/api/v1/routeplanservice/welcome",
                    "code_mapping": "plan.controller.RoutePlanController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/routeplanservice/routePlan/cheapestRoute",
                    "code_mapping": "plan.controller.RoutePlanController#getCheapestRoutes",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "PriceConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Config": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/routeplanservice/routePlan/quickestRoute",
                    "code_mapping": "plan.controller.RoutePlanController#getQuickestRoutes",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "PriceConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Config": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/routeplanservice/routePlan/minStopStations",
                    "code_mapping": "plan.controller.RoutePlanController#getMinStopStations",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Config": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "PriceConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "ts-inside-payment-service:18673",
            "calls": [
                {
                    "endpoint": "/api/v1/orderservice/order/{}",
                    "service": "ts-order-service:12031",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/inside_pay_service/inside_payment"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther/{}",
                    "service": "ts-order-other-service:12032",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/inside_pay_service/inside_payment"
                    ]
                },
                {
                    "endpoint": "/api/v1/paymentservice/payment",
                    "service": "ts-payment-service:19001",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/inside_pay_service/inside_payment",
                        "POST /api/v1/inside_pay_service/inside_payment/difference"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderservice/order/status/{}/{}",
                    "service": "ts-order-service:12031",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/inside_pay_service/inside_payment"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther/status/{}/{}",
                    "service": "ts-order-other-service:12032",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/inside_pay_service/inside_payment"
                    ]
                }
            ],
            "endpoints": [
                {
                    "name": "/api/v1/inside_pay_service/welcome",
                    "code_mapping": "inside_payment.controller.InsidePaymentController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/inside_pay_service/inside_payment",
                    "code_mapping": "inside_payment.controller.InsidePaymentController#pay",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": true
                        },
                        "Payment": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        },
                        "Money": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/inside_pay_service/inside_payment/account",
                    "code_mapping": "inside_payment.controller.InsidePaymentController#createAccount",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Money": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/inside_pay_service/inside_payment/{}/{}",
                    "code_mapping": "inside_payment.controller.InsidePaymentController#addMoney",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Money": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/inside_pay_service/inside_payment/payment",
                    "code_mapping": "inside_payment.controller.InsidePaymentController#queryPayment",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Payment": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/inside_pay_service/inside_payment/account",
                    "code_mapping": "inside_payment.controller.InsidePaymentController#queryAccount",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Payment": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Money": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/inside_pay_service/inside_payment/drawback/{}/{}",
                    "code_mapping": "inside_payment.controller.InsidePaymentController#drawBack",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Money": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/inside_pay_service/inside_payment/difference",
                    "code_mapping": "inside_payment.controller.InsidePaymentController#payDifference",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Money": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Payment": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/inside_pay_service/inside_payment/money",
                    "code_mapping": "inside_payment.controller.InsidePaymentController#queryAddMoney",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Money": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "cancel.controller.CancelController",
            "calls": [
                {
                    "endpoint": "/api/v1/orderservice/order",
                    "service": "ts-order-service:12031",
                    "method": "PUT",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/cancelservice/cancel/{}/{}"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther",
                    "service": "ts-order-other-service:12032",
                    "method": "PUT",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/cancelservice/cancel/{}/{}"
                    ]
                },
                {
                    "endpoint": "/api/v1/inside_pay_service/inside_payment/drawback/{}/{}",
                    "service": "ts-inside-payment-service:18673",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/cancelservice/cancel/{}/{}"
                    ]
                },
                {
                    "endpoint": "/api/v1/userservice/users/id/{}",
                    "service": "ts-user-service:12342",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/cancelservice/cancel/{}/{}"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderservice/order/{}",
                    "service": "ts-order-service:12031",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/cancelservice/cancel/refound/{}",
                        "GET /api/v1/cancelservice/cancel/{}/{}"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther/{}",
                    "service": "ts-order-other-service:12032",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/cancelservice/cancel/refound/{}",
                        "GET /api/v1/cancelservice/cancel/{}/{}"
                    ]
                }
            ],
            "endpoints": [
                {
                    "name": "/api/v1/cancelservice/welcome",
                    "code_mapping": "cancel.controller.CancelController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/cancelservice/cancel/refound/{}",
                    "code_mapping": "cancel.controller.CancelController#calculate",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/cancelservice/cancel/{}/{}",
                    "code_mapping": "cancel.controller.CancelController#cancelTicket",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Money": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        },
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": true
                        },
                        "User": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "ts-route-service:11178",
            "calls": [],
            "endpoints": [
                {
                    "name": "/api/v1/routeservice/welcome",
                    "code_mapping": "route.controller.RouteController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/routeservice/routes",
                    "code_mapping": "route.controller.RouteController#createAndModifyRoute",
                    "return_type": "ResponseEntity<Response>",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": true
                        }
                    }
                },
                {
                    "name": "/api/v1/routeservice/routes/{}",
                    "code_mapping": "route.controller.RouteController#deleteRoute",
                    "return_type": "HttpEntity",
                    "method": "DELETE",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Route": {
                            "READ": true,
                            "DELETE": true,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/routeservice/routes/{}",
                    "code_mapping": "route.controller.RouteController#queryById",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/routeservice/routes",
                    "code_mapping": "route.controller.RouteController#queryAll",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/routeservice/routes/{}/{}",
                    "code_mapping": "route.controller.RouteController#queryByStartAndTerminal",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "adminroute.controller.AdminRouteController",
            "calls": [
                {
                    "endpoint": "/api/v1/routeservice/routes",
                    "service": "ts-route-service:11178",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/adminrouteservice/adminroute"
                    ]
                },
                {
                    "endpoint": "/api/v1/routeservice/routes",
                    "service": "ts-route-service:11178",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/adminrouteservice/adminroute"
                    ]
                },
                {
                    "endpoint": "/api/v1/routeservice/routes/{}",
                    "service": "ts-route-service:11178",
                    "method": "DELETE",
                    "type": "HTTP",
                    "from": [
                        "DELETE /api/v1/adminrouteservice/adminroute/{}"
                    ]
                }
            ],
            "endpoints": [
                {
                    "name": "/api/v1/adminrouteservice/welcome",
                    "code_mapping": "adminroute.controller.AdminRouteController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/adminrouteservice/adminroute",
                    "code_mapping": "adminroute.controller.AdminRouteController#getAllRoutes",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/adminrouteservice/adminroute",
                    "code_mapping": "adminroute.controller.AdminRouteController#addRoute",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": true
                        }
                    }
                },
                {
                    "name": "/api/v1/adminrouteservice/adminroute/{}",
                    "code_mapping": "adminroute.controller.AdminRouteController#deleteRoute",
                    "return_type": "HttpEntity",
                    "method": "DELETE",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Route": {
                            "READ": true,
                            "DELETE": true,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "ts-auth-service:12340",
            "calls": [
                {
                    "endpoint": "/api/v1/verifycode/verify/{}",
                    "service": "ts-verification-code-service:15678",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/users/login"
                    ]
                }
            ],
            "endpoints": [
                {
                    "name": "/api/v1/auth/hello",
                    "code_mapping": "auth.controller.AuthController#getHello",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/auth",
                    "code_mapping": "auth.controller.AuthController#createDefaultUser",
                    "return_type": "HttpEntity<Response>",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "User": {
                            "READ": false,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/users/hello",
                    "code_mapping": "auth.controller.UserController#getHello",
                    "return_type": "Object",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/users/login",
                    "code_mapping": "auth.controller.UserController#getToken",
                    "return_type": "ResponseEntity<Response>",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "User": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/users",
                    "code_mapping": "auth.controller.UserController#getAllUser",
                    "return_type": "ResponseEntity<List<User>>",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "User": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/users/{}",
                    "code_mapping": "auth.controller.UserController#deleteUserById",
                    "return_type": "ResponseEntity<Response>",
                    "method": "DELETE",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "User": {
                            "READ": false,
                            "DELETE": true,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "preserveOther.controller.PreserveOtherController",
            "calls": [
                {
                    "endpoint": "/api/v1/ticketinfoservice/ticketinfo",
                    "service": "ts-ticketinfo-service:15681",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/preserveotherservice/preserveOther"
                    ]
                },
                {
                    "endpoint": "/api/v1/seatservice/seats",
                    "service": "ts-seat-service:18898",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/preserveotherservice/preserveOther"
                    ]
                },
                {
                    "endpoint": "/api/v1/userservice/users/id/{}",
                    "service": "ts-user-service:12342",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/preserveotherservice/preserveOther"
                    ]
                },
                {
                    "endpoint": "/api/v1/assuranceservice/assurances/{}/{}",
                    "service": "ts-assurance-service:18888",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/preserveotherservice/preserveOther"
                    ]
                },
                {
                    "endpoint": "/api/v1/stationservice/stations/id/{}",
                    "service": "ts-station-service:12345",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/preserveotherservice/preserveOther"
                    ]
                },
                {
                    "endpoint": "/api/v1/securityservice/securityConfigs/{}",
                    "service": "ts-security-service:11188",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/preserveotherservice/preserveOther"
                    ]
                },
                {
                    "endpoint": "/api/v1/travel2service/trip_detail",
                    "service": "ts-travel2-service:16346",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/preserveotherservice/preserveOther"
                    ]
                },
                {
                    "endpoint": "/api/v1/contactservice/contacts/{}",
                    "service": "ts-contacts-service:12347",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/preserveotherservice/preserveOther"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther",
                    "service": "ts-order-other-service:12032",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/preserveotherservice/preserveOther"
                    ]
                },
                {
                    "endpoint": "/api/v1/foodservice/orders",
                    "service": "ts-food-service:18856",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/preserveotherservice/preserveOther"
                    ]
                },
                {
                    "endpoint": "/api/v1/consignservice/consigns",
                    "service": "ts-consign-service:16111",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/preserveotherservice/preserveOther"
                    ]
                }
            ],
            "endpoints": [
                {
                    "name": "/api/v1/preserveotherservice/welcome",
                    "code_mapping": "preserveOther.controller.PreserveOtherController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/preserveotherservice/preserveOther",
                    "code_mapping": "preserveOther.controller.PreserveOtherController#preserve",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "ConsignPrice": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "ConsignRecord": {
                            "READ": false,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        },
                        "User": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        },
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Contacts": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "SecurityConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "FoodOrder": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": true
                        },
                        "Config": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Assurance": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        },
                        "PriceConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "ts-train-service:14567",
            "calls": [],
            "endpoints": [
                {
                    "name": "/api/v1/trainservice/trains/welcome",
                    "code_mapping": "train.controller.TrainController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/trainservice/trains",
                    "code_mapping": "train.controller.TrainController#create",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/trainservice/trains/{}",
                    "code_mapping": "train.controller.TrainController#retrieve",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/trainservice/trains",
                    "code_mapping": "train.controller.TrainController#update",
                    "return_type": "HttpEntity",
                    "method": "PUT",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/trainservice/trains/{}",
                    "code_mapping": "train.controller.TrainController#delete",
                    "return_type": "HttpEntity",
                    "method": "DELETE",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "TrainType": {
                            "READ": true,
                            "DELETE": true,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/trainservice/trains",
                    "code_mapping": "train.controller.TrainController#query",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "ts-price-service:16579",
            "calls": [],
            "endpoints": [
                {
                    "name": "/api/v1/priceservice/prices/welcome",
                    "code_mapping": "price.controller.PriceController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/priceservice/prices/{}/{}",
                    "code_mapping": "price.controller.PriceController#query",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "PriceConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/priceservice/prices",
                    "code_mapping": "price.controller.PriceController#queryAll",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "PriceConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/priceservice/prices",
                    "code_mapping": "price.controller.PriceController#create",
                    "return_type": "HttpEntity<?>",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "PriceConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/priceservice/prices",
                    "code_mapping": "price.controller.PriceController#delete",
                    "return_type": "HttpEntity",
                    "method": "DELETE",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "PriceConfig": {
                            "READ": true,
                            "DELETE": true,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/priceservice/prices",
                    "code_mapping": "price.controller.PriceController#update",
                    "return_type": "HttpEntity",
                    "method": "PUT",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "PriceConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": true
                        }
                    }
                }
            ]
        },
        {
            "name": "preserve.controller.PreserveController",
            "calls": [
                {
                    "endpoint": "/api/v1/ticketinfoservice/ticketinfo",
                    "service": "ts-ticketinfo-service:15681",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/preserveservice/preserve"
                    ]
                },
                {
                    "endpoint": "/api/v1/seatservice/seats",
                    "service": "ts-seat-service:18898",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/preserveservice/preserve"
                    ]
                },
                {
                    "endpoint": "/api/v1/userservice/users/id/{}",
                    "service": "ts-user-service:12342",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/preserveservice/preserve"
                    ]
                },
                {
                    "endpoint": "/api/v1/assuranceservice/assurances/{}/{}",
                    "service": "ts-assurance-service:18888",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/preserveservice/preserve"
                    ]
                },
                {
                    "endpoint": "/api/v1/stationservice/stations/id/{}",
                    "service": "ts-station-service:12345",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/preserveservice/preserve"
                    ]
                },
                {
                    "endpoint": "/api/v1/securityservice/securityConfigs/{}",
                    "service": "ts-security-service:11188",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/preserveservice/preserve"
                    ]
                },
                {
                    "endpoint": "/api/v1/travelservice/trip_detail",
                    "service": "ts-travel-service:12346",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/preserveservice/preserve"
                    ]
                },
                {
                    "endpoint": "/api/v1/contactservice/contacts/{}",
                    "service": "ts-contacts-service:12347",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/preserveservice/preserve"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderservice/order",
                    "service": "ts-order-service:12031",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/preserveservice/preserve"
                    ]
                },
                {
                    "endpoint": "/api/v1/foodservice/orders",
                    "service": "ts-food-service:18856",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/preserveservice/preserve"
                    ]
                },
                {
                    "endpoint": "/api/v1/consignservice/consigns",
                    "service": "ts-consign-service:16111",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/preserveservice/preserve"
                    ]
                }
            ],
            "endpoints": [
                {
                    "name": "/api/v1/preserveservice/welcome",
                    "code_mapping": "preserve.controller.PreserveController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/preserveservice/preserve",
                    "code_mapping": "preserve.controller.PreserveController#preserve",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "ConsignPrice": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Config": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "PriceConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Contacts": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "User": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "ConsignRecord": {
                            "READ": false,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        },
                        "SecurityConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Assurance": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        },
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "FoodOrder": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": true
                        },
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "ts-notification-service:17853",
            "calls": [],
            "endpoints": [
                {
                    "name": "/api/v1/notifyservice/welcome",
                    "code_mapping": "notification.controller.NotificationController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/notifyservice/test_send_mq",
                    "code_mapping": "notification.controller.NotificationController#test_send",
                    "return_type": "boolean",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/notifyservice/test_send_mail",
                    "code_mapping": "notification.controller.NotificationController#test_send_mail",
                    "return_type": "boolean",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/notifyservice/notification/preserve_success",
                    "code_mapping": "notification.controller.NotificationController#preserve_success",
                    "return_type": "boolean",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/notifyservice/notification/order_create_success",
                    "code_mapping": "notification.controller.NotificationController#order_create_success",
                    "return_type": "boolean",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/notifyservice/notification/order_changed_success",
                    "code_mapping": "notification.controller.NotificationController#order_changed_success",
                    "return_type": "boolean",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/notifyservice/notification/order_cancel_success",
                    "code_mapping": "notification.controller.NotificationController#order_cancel_success",
                    "return_type": "boolean",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {}
                }
            ]
        },
        {
            "name": "ts-ticketinfo-service:15681",
            "calls": [
                {
                    "endpoint": "/api/v1/basicservice/basic/travel",
                    "service": "ts-basic-service:15680",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/ticketinfoservice/ticketinfo"
                    ]
                },
                {
                    "endpoint": "/api/v1/basicservice/basic/{}",
                    "service": "ts-basic-service:15680",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/ticketinfoservice/ticketinfo/{}"
                    ]
                }
            ],
            "endpoints": [
                {
                    "name": "/api/v1/ticketinfoservice/welcome",
                    "code_mapping": "ticketinfo.controller.TicketInfoController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/ticketinfoservice/ticketinfo",
                    "code_mapping": "ticketinfo.controller.TicketInfoController#queryForTravel",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "PriceConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/ticketinfoservice/ticketinfo/{}",
                    "code_mapping": "ticketinfo.controller.TicketInfoController#queryForStationId",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "ts-basic-service:15680",
            "calls": [
                {
                    "endpoint": "/api/v1/stationservice/stations/id/{}",
                    "service": "ts-station-service:12345",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/basicservice/basic/{}",
                        "POST /api/v1/basicservice/basic/travel"
                    ]
                },
                {
                    "endpoint": "/api/v1/trainservice/trains/{}",
                    "service": "ts-train-service:14567",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/basicservice/basic/travel"
                    ]
                },
                {
                    "endpoint": "/api/v1/routeservice/routes/{}",
                    "service": "ts-route-service:11178",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/basicservice/basic/travel"
                    ]
                },
                {
                    "endpoint": "/api/v1/priceservice/prices/{}/{}",
                    "service": "ts-price-service:16579",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/basicservice/basic/travel"
                    ]
                }
            ],
            "endpoints": [
                {
                    "name": "/api/v1/basicservice/welcome",
                    "code_mapping": "fdse.microservice.controller.BasicController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/basicservice/basic/travel",
                    "code_mapping": "fdse.microservice.controller.BasicController#queryForTravel",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "PriceConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/basicservice/basic/{}",
                    "code_mapping": "fdse.microservice.controller.BasicController#queryForStationId",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "ts-station-service:12345",
            "calls": [],
            "endpoints": [
                {
                    "name": "/api/v1/stationservice/welcome",
                    "code_mapping": "fdse.microservice.controller.StationController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/stationservice/stations",
                    "code_mapping": "fdse.microservice.controller.StationController#query",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/stationservice/stations",
                    "code_mapping": "fdse.microservice.controller.StationController#create",
                    "return_type": "ResponseEntity<Response>",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/stationservice/stations",
                    "code_mapping": "fdse.microservice.controller.StationController#update",
                    "return_type": "HttpEntity",
                    "method": "PUT",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/stationservice/stations",
                    "code_mapping": "fdse.microservice.controller.StationController#delete",
                    "return_type": "ResponseEntity<Response>",
                    "method": "DELETE",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Station": {
                            "READ": true,
                            "DELETE": true,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/stationservice/stations/id/{}",
                    "code_mapping": "fdse.microservice.controller.StationController#queryForStationId",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/stationservice/stations/idlist",
                    "code_mapping": "fdse.microservice.controller.StationController#queryForIdBatch",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/stationservice/stations/name/{}",
                    "code_mapping": "fdse.microservice.controller.StationController#queryById",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/stationservice/stations/namelist",
                    "code_mapping": "fdse.microservice.controller.StationController#queryForNameBatch",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "adminuser.controller.AdminUserController",
            "calls": [
                {
                    "endpoint": "/api/v1/userservice/users",
                    "service": "ts-user-service:12342",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/adminuserservice/users"
                    ]
                },
                {
                    "endpoint": "/api/v1/userservice/users/{}",
                    "service": "ts-user-service:12342",
                    "method": "DELETE",
                    "type": "HTTP",
                    "from": [
                        "DELETE /api/v1/adminuserservice/users/{}"
                    ]
                },
                {
                    "endpoint": "/api/v1/userservice/users",
                    "service": "ts-user-service:12342",
                    "method": "PUT",
                    "type": "HTTP",
                    "from": [
                        "PUT /api/v1/adminuserservice/users"
                    ]
                },
                {
                    "endpoint": "/api/v1/userservice/users/register",
                    "service": "ts-user-service:12342",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/adminuserservice/users"
                    ]
                }
            ],
            "endpoints": [
                {
                    "name": "/api/v1/adminuserservice/users/welcome",
                    "code_mapping": "adminuser.controller.AdminUserController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/adminuserservice/users",
                    "code_mapping": "adminuser.controller.AdminUserController#getAllUsers",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "User": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/adminuserservice/users",
                    "code_mapping": "adminuser.controller.AdminUserController#updateUser",
                    "return_type": "HttpEntity",
                    "method": "PUT",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "User": {
                            "READ": true,
                            "DELETE": true,
                            "CREATE": false,
                            "UPDATE": true
                        }
                    }
                },
                {
                    "name": "/api/v1/adminuserservice/users",
                    "code_mapping": "adminuser.controller.AdminUserController#addUser",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "User": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/adminuserservice/users/{}",
                    "code_mapping": "adminuser.controller.AdminUserController#deleteUser",
                    "return_type": "HttpEntity",
                    "method": "DELETE",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "User": {
                            "READ": true,
                            "DELETE": true,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "ts-assurance-service:18888",
            "calls": [],
            "endpoints": [
                {
                    "name": "/api/v1/assuranceservice/welcome",
                    "code_mapping": "assurance.controller.AssuranceController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/assuranceservice/assurances",
                    "code_mapping": "assurance.controller.AssuranceController#getAllAssurances",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Assurance": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/assuranceservice/assurances/types",
                    "code_mapping": "assurance.controller.AssuranceController#getAllAssuranceType",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/assuranceservice/assurances/assuranceid/{}",
                    "code_mapping": "assurance.controller.AssuranceController#deleteAssurance",
                    "return_type": "HttpEntity",
                    "method": "DELETE",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Assurance": {
                            "READ": true,
                            "DELETE": true,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/assuranceservice/assurances/orderid/{}",
                    "code_mapping": "assurance.controller.AssuranceController#deleteAssuranceByOrderId",
                    "return_type": "HttpEntity",
                    "method": "DELETE",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Assurance": {
                            "READ": true,
                            "DELETE": true,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/assuranceservice/assurances/{}/{}/{}",
                    "code_mapping": "assurance.controller.AssuranceController#modifyAssurance",
                    "return_type": "HttpEntity",
                    "method": "PATCH",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Assurance": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/assuranceservice/assurances/{}/{}",
                    "code_mapping": "assurance.controller.AssuranceController#createNewAssurance",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Assurance": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/assuranceservice/assurances/assuranceid/{}",
                    "code_mapping": "assurance.controller.AssuranceController#getAssuranceById",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Assurance": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/assuranceservice/assurance/orderid/{}",
                    "code_mapping": "assurance.controller.AssuranceController#findAssuranceByOrderId",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Assurance": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "ts-payment-service:19001",
            "calls": [],
            "endpoints": [
                {
                    "name": "/api/v1/paymentservice/welcome",
                    "code_mapping": "com.trainticket.controller.PaymentController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/paymentservice/payment",
                    "code_mapping": "com.trainticket.controller.PaymentController#pay",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Payment": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/paymentservice/payment/money",
                    "code_mapping": "com.trainticket.controller.PaymentController#addMoney",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "AddMoney": {
                            "READ": false,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/paymentservice/payment",
                    "code_mapping": "com.trainticket.controller.PaymentController#query",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Payment": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "ts-security-service:11188",
            "calls": [
                {
                    "endpoint": "/api/v1/orderservice/order/security/{}/{}",
                    "service": "ts-order-service:12031",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/securityservice/securityConfigs/{}"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther/security/{}/{}",
                    "service": "ts-order-other-service:12032",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/securityservice/securityConfigs/{}"
                    ]
                }
            ],
            "endpoints": [
                {
                    "name": "/api/v1/securityservice/welcome",
                    "code_mapping": "security.controller.SecurityController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/securityservice/securityConfigs",
                    "code_mapping": "security.controller.SecurityController#findAllSecurityConfig",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "SecurityConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/securityservice/securityConfigs",
                    "code_mapping": "security.controller.SecurityController#create",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "SecurityConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/securityservice/securityConfigs",
                    "code_mapping": "security.controller.SecurityController#update",
                    "return_type": "HttpEntity",
                    "method": "PUT",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "SecurityConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": true
                        }
                    }
                },
                {
                    "name": "/api/v1/securityservice/securityConfigs/{}",
                    "code_mapping": "security.controller.SecurityController#delete",
                    "return_type": "HttpEntity",
                    "method": "DELETE",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "SecurityConfig": {
                            "READ": true,
                            "DELETE": true,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/securityservice/securityConfigs/{}",
                    "code_mapping": "security.controller.SecurityController#check",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "SecurityConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "adminbasic.controller.AdminBasicInfoController",
            "calls": [
                {
                    "endpoint": "/api/v1/contactservice/contacts",
                    "service": "ts-contacts-service:12347",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/adminbasicservice/adminbasic/contacts"
                    ]
                },
                {
                    "endpoint": "/api/v1/contactservice/contacts/{}",
                    "service": "ts-contacts-service:12347",
                    "method": "DELETE",
                    "type": "HTTP",
                    "from": [
                        "DELETE /api/v1/adminbasicservice/adminbasic/contacts/{}"
                    ]
                },
                {
                    "endpoint": "/api/v1/contactservice/contacts",
                    "service": "ts-contacts-service:12347",
                    "method": "PUT",
                    "type": "HTTP",
                    "from": [
                        "PUT /api/v1/adminbasicservice/adminbasic/contacts"
                    ]
                },
                {
                    "endpoint": "/api/v1/contactservice/contacts/admin",
                    "service": "ts-contacts-service:12347",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/adminbasicservice/adminbasic/contacts"
                    ]
                },
                {
                    "endpoint": "/api/v1/stationservice/stations",
                    "service": "ts-station-service:12345",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/adminbasicservice/adminbasic/stations"
                    ]
                },
                {
                    "endpoint": "/api/v1/stationservice/stations",
                    "service": "ts-station-service:12345",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/adminbasicservice/adminbasic/stations"
                    ]
                },
                {
                    "endpoint": "/api/v1/stationservice/stations",
                    "service": "ts-station-service:12345",
                    "method": "DELETE",
                    "type": "HTTP",
                    "from": [
                        "DELETE /api/v1/adminbasicservice/adminbasic/stations"
                    ]
                },
                {
                    "endpoint": "/api/v1/stationservice/stations",
                    "service": "ts-station-service:12345",
                    "method": "PUT",
                    "type": "HTTP",
                    "from": [
                        "PUT /api/v1/adminbasicservice/adminbasic/stations"
                    ]
                },
                {
                    "endpoint": "/api/v1/trainservice/trains",
                    "service": "ts-train-service:14567",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/adminbasicservice/adminbasic/trains"
                    ]
                },
                {
                    "endpoint": "/api/v1/trainservice/trains",
                    "service": "ts-train-service:14567",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/adminbasicservice/adminbasic/trains"
                    ]
                },
                {
                    "endpoint": "/api/v1/trainservice/trains/{}",
                    "service": "ts-train-service:14567",
                    "method": "DELETE",
                    "type": "HTTP",
                    "from": [
                        "DELETE /api/v1/adminbasicservice/adminbasic/trains/{}"
                    ]
                },
                {
                    "endpoint": "/api/v1/trainservice/trains",
                    "service": "ts-train-service:14567",
                    "method": "PUT",
                    "type": "HTTP",
                    "from": [
                        "PUT /api/v1/adminbasicservice/adminbasic/trains"
                    ]
                },
                {
                    "endpoint": "/api/v1/configservice/configs",
                    "service": "ts-config-service:15679",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/adminbasicservice/adminbasic/configs"
                    ]
                },
                {
                    "endpoint": "/api/v1/configservice/configs",
                    "service": "ts-config-service:15679",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/adminbasicservice/adminbasic/configs"
                    ]
                },
                {
                    "endpoint": "/api/v1/configservice/configs/{}",
                    "service": "ts-config-service:15679",
                    "method": "DELETE",
                    "type": "HTTP",
                    "from": [
                        "DELETE /api/v1/adminbasicservice/adminbasic/configs/{}"
                    ]
                },
                {
                    "endpoint": "/api/v1/configservice/configs",
                    "service": "ts-config-service:15679",
                    "method": "PUT",
                    "type": "HTTP",
                    "from": [
                        "PUT /api/v1/adminbasicservice/adminbasic/configs"
                    ]
                },
                {
                    "endpoint": "/api/v1/priceservice/prices",
                    "service": "ts-price-service:16579",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/adminbasicservice/adminbasic/prices"
                    ]
                },
                {
                    "endpoint": "/api/v1/priceservice/prices",
                    "service": "ts-price-service:16579",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/adminbasicservice/adminbasic/prices"
                    ]
                },
                {
                    "endpoint": "/api/v1/priceservice/prices",
                    "service": "ts-price-service:16579",
                    "method": "DELETE",
                    "type": "HTTP",
                    "from": [
                        "DELETE /api/v1/adminbasicservice/adminbasic/prices"
                    ]
                },
                {
                    "endpoint": "/api/v1/priceservice/prices",
                    "service": "ts-price-service:16579",
                    "method": "PUT",
                    "type": "HTTP",
                    "from": [
                        "PUT /api/v1/adminbasicservice/adminbasic/prices"
                    ]
                }
            ],
            "endpoints": [
                {
                    "name": "/api/v1/adminbasicservice/welcome",
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/adminbasicservice/adminbasic/contacts",
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#getAllContacts",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Contacts": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/adminbasicservice/adminbasic/contacts/{}",
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#deleteContacts",
                    "return_type": "HttpEntity",
                    "method": "DELETE",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Contacts": {
                            "READ": true,
                            "DELETE": true,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/adminbasicservice/adminbasic/contacts",
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#modifyContacts",
                    "return_type": "HttpEntity",
                    "method": "PUT",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Contacts": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/adminbasicservice/adminbasic/contacts",
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#addContacts",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Contacts": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/adminbasicservice/adminbasic/stations",
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#getAllStations",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/adminbasicservice/adminbasic/stations",
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#deleteStation",
                    "return_type": "HttpEntity",
                    "method": "DELETE",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Station": {
                            "READ": true,
                            "DELETE": true,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/adminbasicservice/adminbasic/stations",
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#modifyStation",
                    "return_type": "HttpEntity",
                    "method": "PUT",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/adminbasicservice/adminbasic/stations",
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#addStation",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/adminbasicservice/adminbasic/trains",
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#getAllTrains",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/adminbasicservice/adminbasic/trains/{}",
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#deleteTrain",
                    "return_type": "HttpEntity",
                    "method": "DELETE",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "TrainType": {
                            "READ": true,
                            "DELETE": true,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/adminbasicservice/adminbasic/trains",
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#modifyTrain",
                    "return_type": "HttpEntity",
                    "method": "PUT",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/adminbasicservice/adminbasic/trains",
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#addTrain",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/adminbasicservice/adminbasic/configs",
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#getAllConfigs",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Config": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/adminbasicservice/adminbasic/configs/{}",
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#deleteConfig",
                    "return_type": "HttpEntity",
                    "method": "DELETE",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Config": {
                            "READ": true,
                            "DELETE": true,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/adminbasicservice/adminbasic/configs",
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#modifyConfig",
                    "return_type": "HttpEntity",
                    "method": "PUT",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Config": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/adminbasicservice/adminbasic/configs",
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#addConfig",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Config": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/adminbasicservice/adminbasic/prices",
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#getAllPrices",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "PriceConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/adminbasicservice/adminbasic/prices",
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#deletePrice",
                    "return_type": "HttpEntity",
                    "method": "DELETE",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "PriceConfig": {
                            "READ": true,
                            "DELETE": true,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/adminbasicservice/adminbasic/prices",
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#modifyPrice",
                    "return_type": "HttpEntity",
                    "method": "PUT",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "PriceConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": true
                        }
                    }
                },
                {
                    "name": "/api/v1/adminbasicservice/adminbasic/prices",
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#addPrice",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "PriceConfig": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": true,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "ts-food-service:18856",
            "calls": [
                {
                    "endpoint": "/api/v1/foodmapservice/trainfoods/{}",
                    "service": "ts-food-map-service:18855",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/foodservice/foods/{}/{}/{}/{}"
                    ]
                },
                {
                    "endpoint": "/api/v1/travelservice/routes/{}",
                    "service": "ts-travel-service:12346",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/foodservice/foods/{}/{}/{}/{}"
                    ]
                },
                {
                    "endpoint": "/api/v1/stationservice/stations/id/{}",
                    "service": "ts-station-service:12345",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/foodservice/foods/{}/{}/{}/{}",
                        "GET /api/v1/foodservice/foods/{}/{}/{}/{}"
                    ]
                },
                {
                    "endpoint": "/api/v1/foodmapservice/foodstores",
                    "service": "ts-food-map-service:18855",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "GET /api/v1/foodservice/foods/{}/{}/{}/{}"
                    ]
                }
            ],
            "endpoints": [
                {
                    "name": "/api/v1/foodservice/welcome",
                    "code_mapping": "foodsearch.controller.FoodController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/foodservice/test_send_delivery",
                    "code_mapping": "foodsearch.controller.FoodController#test_send_delivery",
                    "return_type": "boolean",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/foodservice/orders",
                    "code_mapping": "foodsearch.controller.FoodController#findAllFoodOrder",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "FoodOrder": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/foodservice/orders",
                    "code_mapping": "foodsearch.controller.FoodController#createFoodOrder",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "FoodOrder": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": true
                        }
                    }
                },
                {
                    "name": "/api/v1/foodservice/orders",
                    "code_mapping": "foodsearch.controller.FoodController#updateFoodOrder",
                    "return_type": "HttpEntity",
                    "method": "PUT",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "FoodOrder": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": true
                        }
                    }
                },
                {
                    "name": "/api/v1/foodservice/orders/{}",
                    "code_mapping": "foodsearch.controller.FoodController#deleteFoodOrder",
                    "return_type": "HttpEntity",
                    "method": "DELETE",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "FoodOrder": {
                            "READ": true,
                            "DELETE": true,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/foodservice/orders/{}",
                    "code_mapping": "foodsearch.controller.FoodController#findFoodOrderByOrderId",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "FoodOrder": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/foodservice/foods/{}/{}/{}/{}",
                    "code_mapping": "foodsearch.controller.FoodController#getAllFood",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "TrainFood": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Station": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "FoodStore": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "ts-food-map-service:18855",
            "calls": [],
            "endpoints": [
                {
                    "name": "/api/v1/foodmapservice/trainfoods/welcome",
                    "code_mapping": "food.controller.TrainFoodController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/foodmapservice/trainfoods",
                    "code_mapping": "food.controller.TrainFoodController#getAllTrainFood",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "TrainFood": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/foodmapservice/trainfoods/{}",
                    "code_mapping": "food.controller.TrainFoodController#getTrainFoodOfTrip",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "TrainFood": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/foodmapservice/foodstores/welcome",
                    "code_mapping": "food.controller.FoodStoreController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/foodmapservice/foodstores",
                    "code_mapping": "food.controller.FoodStoreController#getAllFoodStores",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "FoodStore": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/foodmapservice/foodstores/{}",
                    "code_mapping": "food.controller.FoodStoreController#getFoodStoresOfStation",
                    "return_type": "HttpEntity",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "FoodStore": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/foodmapservice/foodstores",
                    "code_mapping": "food.controller.FoodStoreController#getFoodStoresByStationIds",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "FoodStore": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "ts-seat-service:18898",
            "calls": [
                {
                    "endpoint": "/api/v1/travelservice/routes/{}",
                    "service": "ts-travel-service:12346",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/seatservice/seats",
                        "POST /api/v1/seatservice/seats/left_tickets"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderservice/order/tickets",
                    "service": "ts-order-service:12031",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/seatservice/seats",
                        "POST /api/v1/seatservice/seats/left_tickets"
                    ]
                },
                {
                    "endpoint": "/api/v1/travelservice/train_types/{}",
                    "service": "ts-travel-service:12346",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/seatservice/seats",
                        "POST /api/v1/seatservice/seats/left_tickets"
                    ]
                },
                {
                    "endpoint": "/api/v1/travel2service/routes/{}",
                    "service": "ts-travel2-service:16346",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/seatservice/seats",
                        "POST /api/v1/seatservice/seats/left_tickets"
                    ]
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther/tickets",
                    "service": "ts-order-other-service:12032",
                    "method": "POST",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/seatservice/seats",
                        "POST /api/v1/seatservice/seats/left_tickets"
                    ]
                },
                {
                    "endpoint": "/api/v1/travel2service/train_types/{}",
                    "service": "ts-travel2-service:16346",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/seatservice/seats",
                        "POST /api/v1/seatservice/seats/left_tickets"
                    ]
                },
                {
                    "endpoint": "/api/v1/configservice/configs/{}",
                    "service": "ts-config-service:15679",
                    "method": "GET",
                    "type": "HTTP",
                    "from": [
                        "POST /api/v1/seatservice/seats/left_tickets"
                    ]
                }
            ],
            "endpoints": [
                {
                    "name": "/api/v1/seatservice/welcome",
                    "code_mapping": "seat.controller.SeatController#home",
                    "return_type": "String",
                    "method": "GET",
                    "type": "HTTP",
                    "flow_crud_access": {}
                },
                {
                    "name": "/api/v1/seatservice/seats",
                    "code_mapping": "seat.controller.SeatController#create",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                },
                {
                    "name": "/api/v1/seatservice/seats/left_tickets",
                    "code_mapping": "seat.controller.SeatController#getLeftTicketOfInterval",
                    "return_type": "HttpEntity",
                    "method": "POST",
                    "type": "HTTP",
                    "flow_crud_access": {
                        "TrainType": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Trip": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Config": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Route": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        },
                        "Order": {
                            "READ": true,
                            "DELETE": false,
                            "CREATE": false,
                            "UPDATE": false
                        }
                    }
                }
            ]
        },
        {
            "name": "ts-order-service:12031",
            "calls": [],
            "endpoints": [
                {
                    "name": "/api/v1/orderservice/order/{}",
                    "code_mapping": "unknown",
                    "return_type": "",
                    "method": "POST /api/v1/orderservice/order/{}",
                    "type": "HTTP",
                    "flow_crud_access": null
                }
            ]
        },
        {
            "name": "ts-order-other-service:12032",
            "calls": [],
            "endpoints": [
                {
                    "name": "/api/v1/orderOtherService/orderOther/{}",
                    "code_mapping": "unknown",
                    "return_type": "",
                    "method": "POST /api/v1/orderOtherService/orderOther/{}",
                    "type": "HTTP",
                    "flow_crud_access": null
                }
            ]
        }
    ]
};

const outer_res = {};
for (const svc of x.services) {
  for (const endpoint of svc.endpoints) {
    if (endpoint.flow_crud_access !== null) {
	  outer_res[endpoint.code_mapping] = endpoint.flow_crud_access;
	}
  }
}
const flatten = (path, current, result) => {
	if (typeof current === "object") {
	  for (const k in current) {
	    flatten(`${path ? path + "." : ""}${k}`, current[k], result);
	  }
	} else {
	  result[path] = current;
	}
};
const flattened_result = {};
flatten(undefined, outer_res, flattened_result);
flattened_result;