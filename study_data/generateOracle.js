const x = {
    "services": [
        {
            "calls": [],
            "endpoints": [
                {
                    "code_mapping": "price.controller.PriceController#home",
                    "method": "GET",
                    "name": "/api/v1/priceservice/prices/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "price.controller.PriceController#query",
                    "method": "GET",
                    "name": "/api/v1/priceservice/prices/{routeId}/{trainType}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "price.controller.PriceController#queryAll",
                    "method": "GET",
                    "name": "/api/v1/priceservice/prices",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "price.controller.PriceController#create",
                    "method": "POST",
                    "name": "/api/v1/priceservice/prices",
                    "return_type": "HttpEntity<?>",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "price.controller.PriceController#delete",
                    "method": "DELETE",
                    "name": "/api/v1/priceservice/prices",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "price.controller.PriceController#update",
                    "method": "PUT",
                    "name": "/api/v1/priceservice/prices",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "ts-price-service:16579"
        },
        {
            "calls": [
                {
                    "endpoint": "/api/v1/routeservice/routes/{}/{}",
                    "from": [
                        "POST /api/v1/routeplanservice/routePlan/minStopStations"
                    ],
                    "method": "GET",
                    "service": "ts-route-service:11178",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/travelservice/trips/routes",
                    "from": [
                        "POST /api/v1/routeplanservice/routePlan/minStopStations"
                    ],
                    "method": "POST",
                    "service": "ts-travel-service:12346",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/travel2service/trips/routes",
                    "from": [
                        "POST /api/v1/routeplanservice/routePlan/minStopStations"
                    ],
                    "method": "POST",
                    "service": "ts-travel2-service:16346",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/travelservice/trip_detail",
                    "from": [
                        "POST /api/v1/routeplanservice/routePlan/minStopStations"
                    ],
                    "method": "POST",
                    "service": "ts-travel-service:12346",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/travel2service/trip_detail",
                    "from": [
                        "POST /api/v1/routeplanservice/routePlan/minStopStations"
                    ],
                    "method": "POST",
                    "service": "ts-travel2-service:16346",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/stationservice/stations/id/{}",
                    "from": [
                        "POST /api/v1/routeplanservice/routePlan/minStopStations"
                    ],
                    "method": "GET",
                    "service": "ts-station-service:12345",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/routeservice/routes/{}",
                    "from": [
                        "POST /api/v1/routeplanservice/routePlan/minStopStations"
                    ],
                    "method": "GET",
                    "service": "ts-route-service:11178",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/travelservice/trips/left",
                    "from": [
                        "POST /api/v1/routeplanservice/routePlan/cheapestRoute",
                        "POST /api/v1/routeplanservice/routePlan/quickestRoute"
                    ],
                    "method": "POST",
                    "service": "ts-travel-service:12346",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/travel2service/trips/left",
                    "from": [
                        "POST /api/v1/routeplanservice/routePlan/cheapestRoute",
                        "POST /api/v1/routeplanservice/routePlan/quickestRoute"
                    ],
                    "method": "POST",
                    "service": "ts-travel2-service:16346",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/travelservice/routes/{}",
                    "from": [
                        "POST /api/v1/routeplanservice/routePlan/cheapestRoute",
                        "POST /api/v1/routeplanservice/routePlan/quickestRoute"
                    ],
                    "method": "GET",
                    "service": "ts-travel-service:12346",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/travel2service/routes/{}",
                    "from": [
                        "POST /api/v1/routeplanservice/routePlan/cheapestRoute",
                        "POST /api/v1/routeplanservice/routePlan/quickestRoute"
                    ],
                    "method": "GET",
                    "service": "ts-travel2-service:16346",
                    "type": "HTTP"
                }
            ],
            "endpoints": [
                {
                    "code_mapping": "plan.controller.RoutePlanController#home",
                    "method": "GET",
                    "name": "/api/v1/routeplanservice/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "plan.controller.RoutePlanController#getCheapestRoutes",
                    "method": "POST",
                    "name": "/api/v1/routeplanservice/routePlan/cheapestRoute",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "plan.controller.RoutePlanController#getQuickestRoutes",
                    "method": "POST",
                    "name": "/api/v1/routeplanservice/routePlan/quickestRoute",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "plan.controller.RoutePlanController#getMinStopStations",
                    "method": "POST",
                    "name": "/api/v1/routeplanservice/routePlan/minStopStations",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "ts-route-plan-service:14578"
        },
        {
            "calls": [
                {
                    "endpoint": "/api/v1/consignpriceservice/consignprice/{}/{}",
                    "from": [
                        "POST /api/v1/consignservice/consigns",
                        "PUT /api/v1/consignservice/consigns"
                    ],
                    "method": "GET",
                    "service": "ts-consign-price-service:16110",
                    "type": "HTTP"
                }
            ],
            "endpoints": [
                {
                    "code_mapping": "consign.controller.ConsignController#home",
                    "method": "GET",
                    "name": "/api/v1/consignservice/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "consign.controller.ConsignController#insertConsign",
                    "method": "POST",
                    "name": "/api/v1/consignservice/consigns",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "consign.controller.ConsignController#updateConsign",
                    "method": "PUT",
                    "name": "/api/v1/consignservice/consigns",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "consign.controller.ConsignController#findByAccountId",
                    "method": "GET",
                    "name": "/api/v1/consignservice/consigns/account/{id}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "consign.controller.ConsignController#findByOrderId",
                    "method": "GET",
                    "name": "/api/v1/consignservice/consigns/order/{id}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "consign.controller.ConsignController#findByConsignee",
                    "method": "GET",
                    "name": "/api/v1/consignservice/consigns/{consignee}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "ts-consign-service:16111"
        },
        {
            "calls": [],
            "endpoints": [
                {
                    "code_mapping": "config.controller.ConfigController#home",
                    "method": "GET",
                    "name": "/api/v1/configservice/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "config.controller.ConfigController#queryAll",
                    "method": "GET",
                    "name": "/api/v1/configservice/configs",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "config.controller.ConfigController#createConfig",
                    "method": "POST",
                    "name": "/api/v1/configservice/configs",
                    "return_type": "HttpEntity<?>",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "config.controller.ConfigController#updateConfig",
                    "method": "PUT",
                    "name": "/api/v1/configservice/configs",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "config.controller.ConfigController#deleteConfig",
                    "method": "DELETE",
                    "name": "/api/v1/configservice/configs/{configName}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "config.controller.ConfigController#retrieve",
                    "method": "GET",
                    "name": "/api/v1/configservice/configs/{configName}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "ts-config-service:15679"
        },
        {
            "calls": [
                {
                    "endpoint": "/api/v1/seatservice/seats/left_tickets",
                    "from": [
                        "POST /api/v1/travelplanservice/travelPlan/cheapest",
                        "POST /api/v1/travelplanservice/travelPlan/minStation",
                        "POST /api/v1/travelplanservice/travelPlan/quickest"
                    ],
                    "method": "POST",
                    "service": "ts-seat-service:18898",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/routeplanservice/routePlan/cheapestRoute",
                    "from": [
                        "POST /api/v1/travelplanservice/travelPlan/cheapest"
                    ],
                    "method": "POST",
                    "service": "ts-route-plan-service:14578",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/routeplanservice/routePlan/quickestRoute",
                    "from": [
                        "POST /api/v1/travelplanservice/travelPlan/quickest"
                    ],
                    "method": "POST",
                    "service": "ts-route-plan-service:14578",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/routeplanservice/routePlan/minStopStations",
                    "from": [
                        "POST /api/v1/travelplanservice/travelPlan/minStation"
                    ],
                    "method": "POST",
                    "service": "ts-route-plan-service:14578",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/travelservice/trips/left",
                    "from": [
                        "POST /api/v1/travelplanservice/travelPlan/transferResult"
                    ],
                    "method": "POST",
                    "service": "ts-travel-service:12346",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/travel2service/trips/left",
                    "from": [
                        "POST /api/v1/travelplanservice/travelPlan/transferResult"
                    ],
                    "method": "POST",
                    "service": "ts-travel2-service:16346",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/ticketinfoservice/ticketinfo/{}",
                    "from": [
                        "POST /api/v1/travelplanservice/travelPlan/cheapest",
                        "POST /api/v1/travelplanservice/travelPlan/minStation",
                        "POST /api/v1/travelplanservice/travelPlan/quickest"
                    ],
                    "method": "GET",
                    "service": "ts-ticketinfo-service:15681",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/stationservice/stations/namelist",
                    "from": [
                        "POST /api/v1/travelplanservice/travelPlan/cheapest",
                        "POST /api/v1/travelplanservice/travelPlan/minStation",
                        "POST /api/v1/travelplanservice/travelPlan/quickest"
                    ],
                    "method": "POST",
                    "service": "ts-station-service:12345",
                    "type": "HTTP"
                }
            ],
            "endpoints": [
                {
                    "code_mapping": "travelplan.controller.TravelPlanController#home",
                    "method": "GET",
                    "name": "/api/v1/travelplanservice/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "travelplan.controller.TravelPlanController#getTransferResult",
                    "method": "POST",
                    "name": "/api/v1/travelplanservice/travelPlan/transferResult",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "travelplan.controller.TravelPlanController#getByCheapest",
                    "method": "POST",
                    "name": "/api/v1/travelplanservice/travelPlan/cheapest",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "travelplan.controller.TravelPlanController#getByQuickest",
                    "method": "POST",
                    "name": "/api/v1/travelplanservice/travelPlan/quickest",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "travelplan.controller.TravelPlanController#getByMinStation",
                    "method": "POST",
                    "name": "/api/v1/travelplanservice/travelPlan/minStation",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "travelplan.controller.TravelPlanController"
        },
        {
            "calls": [],
            "endpoints": [
                {
                    "code_mapping": "contacts.controller.ContactsController#home",
                    "method": "GET",
                    "name": "/api/v1/contactservice/contacts/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "contacts.controller.ContactsController#getAllContacts",
                    "method": "GET",
                    "name": "/api/v1/contactservice/contacts",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "contacts.controller.ContactsController#createNewContacts",
                    "method": "POST",
                    "name": "/api/v1/contactservice/contacts",
                    "return_type": "ResponseEntity<Response>",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "contacts.controller.ContactsController#createNewContactsAdmin",
                    "method": "POST",
                    "name": "/api/v1/contactservice/contacts/admin",
                    "return_type": "HttpEntity<?>",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "contacts.controller.ContactsController#deleteContacts",
                    "method": "DELETE",
                    "name": "/api/v1/contactservice/contacts/{contactsId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "contacts.controller.ContactsController#modifyContacts",
                    "method": "PUT",
                    "name": "/api/v1/contactservice/contacts",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "contacts.controller.ContactsController#findContactsByAccountId",
                    "method": "GET",
                    "name": "/api/v1/contactservice/contacts/account/{accountId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "contacts.controller.ContactsController#getContactsByContactsId",
                    "method": "GET",
                    "name": "/api/v1/contactservice/contacts/{id}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "ts-contacts-service:12347"
        },
        {
            "calls": [],
            "endpoints": [
                {
                    "code_mapping": "train.controller.TrainController#home",
                    "method": "GET",
                    "name": "/api/v1/trainservice/trains/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "train.controller.TrainController#create",
                    "method": "POST",
                    "name": "/api/v1/trainservice/trains",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "train.controller.TrainController#retrieve",
                    "method": "GET",
                    "name": "/api/v1/trainservice/trains/{id}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "train.controller.TrainController#update",
                    "method": "PUT",
                    "name": "/api/v1/trainservice/trains",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "train.controller.TrainController#delete",
                    "method": "DELETE",
                    "name": "/api/v1/trainservice/trains/{id}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "train.controller.TrainController#query",
                    "method": "GET",
                    "name": "/api/v1/trainservice/trains",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "ts-train-service:14567"
        },
        {
            "calls": [],
            "endpoints": [
                {
                    "code_mapping": "assurance.controller.AssuranceController#home",
                    "method": "GET",
                    "name": "/api/v1/assuranceservice/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "assurance.controller.AssuranceController#getAllAssurances",
                    "method": "GET",
                    "name": "/api/v1/assuranceservice/assurances",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "assurance.controller.AssuranceController#getAllAssuranceType",
                    "method": "GET",
                    "name": "/api/v1/assuranceservice/assurances/types",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "assurance.controller.AssuranceController#deleteAssurance",
                    "method": "DELETE",
                    "name": "/api/v1/assuranceservice/assurances/assuranceid/{assuranceId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "assurance.controller.AssuranceController#deleteAssuranceByOrderId",
                    "method": "DELETE",
                    "name": "/api/v1/assuranceservice/assurances/orderid/{orderId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "assurance.controller.AssuranceController#modifyAssurance",
                    "method": "PATCH",
                    "name": "/api/v1/assuranceservice/assurances/{assuranceId}/{orderId}/{typeIndex}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "assurance.controller.AssuranceController#createNewAssurance",
                    "method": "GET",
                    "name": "/api/v1/assuranceservice/assurances/{typeIndex}/{orderId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "assurance.controller.AssuranceController#getAssuranceById",
                    "method": "GET",
                    "name": "/api/v1/assuranceservice/assurances/assuranceid/{assuranceId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "assurance.controller.AssuranceController#findAssuranceByOrderId",
                    "method": "GET",
                    "name": "/api/v1/assuranceservice/assurance/orderid/{orderId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "ts-assurance-service:18888"
        },
        {
            "calls": [
                {
                    "endpoint": "/api/v1/ticketinfoservice/ticketinfo",
                    "from": [
                        "POST /api/v1/travel2service/trip_detail",
                        "POST /api/v1/travel2service/trips/left"
                    ],
                    "method": "POST",
                    "service": "ts-ticketinfo-service:15681",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther/{}/{}",
                    "from": [
                        "POST /api/v1/travel2service/trip_detail",
                        "POST /api/v1/travel2service/trips/left"
                    ],
                    "method": "GET",
                    "service": "ts-order-other-service:12032",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/trainservice/trains/{}",
                    "from": [
                        "GET /api/v1/travel2service/admin_trip",
                        "POST /api/v1/travel2service/trip_detail",
                        "POST /api/v1/travel2service/trips/left",
                        "GET /api/v1/travel2service/train_types/{}"
                    ],
                    "method": "GET",
                    "service": "ts-train-service:14567",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/ticketinfoservice/ticketinfo/{}",
                    "from": [
                        "POST /api/v1/travel2service/trip_detail",
                        "POST /api/v1/travel2service/trips/left"
                    ],
                    "method": "GET",
                    "service": "ts-ticketinfo-service:15681",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/routeservice/routes/{}",
                    "from": [
                        "GET /api/v1/travel2service/admin_trip",
                        "GET /api/v1/travel2service/routes/{}",
                        "POST /api/v1/travel2service/trip_detail",
                        "POST /api/v1/travel2service/trips/left"
                    ],
                    "method": "GET",
                    "service": "ts-route-service:11178",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/seatservice/seats/left_tickets",
                    "from": [
                        "POST /api/v1/travel2service/trip_detail",
                        "POST /api/v1/travel2service/trips/left"
                    ],
                    "method": "POST",
                    "service": "ts-seat-service:18898",
                    "type": "HTTP"
                }
            ],
            "endpoints": [
                {
                    "code_mapping": "travel2.controller.Travel2Controller#home",
                    "method": "GET",
                    "name": "/api/v1/travel2service/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "travel2.controller.Travel2Controller#getTrainTypeByTripId",
                    "method": "GET",
                    "name": "/api/v1/travel2service/train_types/{tripId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "travel2.controller.Travel2Controller#getRouteByTripId",
                    "method": "GET",
                    "name": "/api/v1/travel2service/routes/{tripId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "travel2.controller.Travel2Controller#getTripsByRouteId",
                    "method": "POST",
                    "name": "/api/v1/travel2service/trips/routes",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "travel2.controller.Travel2Controller#createTrip",
                    "method": "POST",
                    "name": "/api/v1/travel2service/trips",
                    "return_type": "HttpEntity<?>",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "travel2.controller.Travel2Controller#retrieve",
                    "method": "GET",
                    "name": "/api/v1/travel2service/trips/{tripId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "travel2.controller.Travel2Controller#updateTrip",
                    "method": "PUT",
                    "name": "/api/v1/travel2service/trips",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "travel2.controller.Travel2Controller#deleteTrip",
                    "method": "DELETE",
                    "name": "/api/v1/travel2service/trips/{tripId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "travel2.controller.Travel2Controller#queryInfo",
                    "method": "POST",
                    "name": "/api/v1/travel2service/trips/left",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "travel2.controller.Travel2Controller#getTripAllDetailInfo",
                    "method": "POST",
                    "name": "/api/v1/travel2service/trip_detail",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "travel2.controller.Travel2Controller#queryAll",
                    "method": "GET",
                    "name": "/api/v1/travel2service/trips",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "travel2.controller.Travel2Controller#adminQueryAll",
                    "method": "GET",
                    "name": "/api/v1/travel2service/admin_trip",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "ts-travel2-service:16346"
        },
        {
            "calls": [
                {
                    "endpoint": "/api/v1/travelservice/admin_trip",
                    "from": [
                        "GET /api/v1/admintravelservice/admintravel"
                    ],
                    "method": "GET",
                    "service": "ts-travel-service:12346",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/travel2service/admin_trip",
                    "from": [
                        "GET /api/v1/admintravelservice/admintravel"
                    ],
                    "method": "GET",
                    "service": "ts-travel2-service:16346",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/travelservice/trips",
                    "from": [
                        "POST /api/v1/admintravelservice/admintravel"
                    ],
                    "method": "POST",
                    "service": "ts-travel-service:12346",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/travel2service/trips",
                    "from": [
                        "POST /api/v1/admintravelservice/admintravel"
                    ],
                    "method": "POST",
                    "service": "ts-travel2-service:16346",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/travelservice/trips",
                    "from": [
                        "PUT /api/v1/admintravelservice/admintravel"
                    ],
                    "method": "PUT",
                    "service": "ts-travel-service:12346",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/travel2service/trips",
                    "from": [
                        "PUT /api/v1/admintravelservice/admintravel"
                    ],
                    "method": "PUT",
                    "service": "ts-travel2-service:16346",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/travelservice/trips/{}",
                    "from": [
                        "DELETE /api/v1/admintravelservice/admintravel/{}"
                    ],
                    "method": "DELETE",
                    "service": "ts-travel-service:12346",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/travel2service/trips/{}",
                    "from": [
                        "DELETE /api/v1/admintravelservice/admintravel/{}"
                    ],
                    "method": "DELETE",
                    "service": "ts-travel2-service:16346",
                    "type": "HTTP"
                }
            ],
            "endpoints": [
                {
                    "code_mapping": "admintravel.controller.AdminTravelController#home",
                    "method": "GET",
                    "name": "/api/v1/admintravelservice/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "admintravel.controller.AdminTravelController#getAllTravels",
                    "method": "GET",
                    "name": "/api/v1/admintravelservice/admintravel",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "admintravel.controller.AdminTravelController#addTravel",
                    "method": "POST",
                    "name": "/api/v1/admintravelservice/admintravel",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "admintravel.controller.AdminTravelController#updateTravel",
                    "method": "PUT",
                    "name": "/api/v1/admintravelservice/admintravel",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "admintravel.controller.AdminTravelController#deleteTravel",
                    "method": "DELETE",
                    "name": "/api/v1/admintravelservice/admintravel/{tripId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "admintravel.controller.AdminTravelController"
        },
        {
            "calls": [
                {
                    "endpoint": "/api/v1/seatservice/seats",
                    "from": [
                        "POST /api/v1/rebookservice/rebook/difference",
                        "POST /api/v1/rebookservice/rebook"
                    ],
                    "method": "POST",
                    "service": "ts-seat-service:18898",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/travelservice/trip_detail",
                    "from": [
                        "POST /api/v1/rebookservice/rebook/difference",
                        "POST /api/v1/rebookservice/rebook"
                    ],
                    "method": "POST",
                    "service": "ts-travel-service:12346",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/travel2service/trip_detail",
                    "from": [
                        "POST /api/v1/rebookservice/rebook/difference",
                        "POST /api/v1/rebookservice/rebook"
                    ],
                    "method": "POST",
                    "service": "ts-travel2-service:16346",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderservice/order",
                    "from": [
                        "POST /api/v1/rebookservice/rebook/difference",
                        "POST /api/v1/rebookservice/rebook"
                    ],
                    "method": "POST",
                    "service": "ts-order-service:12031",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther",
                    "from": [
                        "POST /api/v1/rebookservice/rebook/difference",
                        "POST /api/v1/rebookservice/rebook"
                    ],
                    "method": "POST",
                    "service": "ts-order-other-service:12032",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderservice/order",
                    "from": [
                        "POST /api/v1/rebookservice/rebook/difference",
                        "POST /api/v1/rebookservice/rebook"
                    ],
                    "method": "PUT",
                    "service": "ts-order-service:12031",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther",
                    "from": [
                        "POST /api/v1/rebookservice/rebook/difference",
                        "POST /api/v1/rebookservice/rebook"
                    ],
                    "method": "PUT",
                    "service": "ts-order-other-service:12032",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderservice/order/{}",
                    "from": [
                        "POST /api/v1/rebookservice/rebook/difference",
                        "POST /api/v1/rebookservice/rebook"
                    ],
                    "method": "POST",
                    "service": "ts-order-service:12031",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther/{}",
                    "from": [
                        "POST /api/v1/rebookservice/rebook/difference",
                        "POST /api/v1/rebookservice/rebook"
                    ],
                    "method": "POST",
                    "service": "ts-order-other-service:12032",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderservice/order/{}",
                    "from": [
                        "POST /api/v1/rebookservice/rebook/difference",
                        "POST /api/v1/rebookservice/rebook"
                    ],
                    "method": "GET",
                    "service": "ts-order-service:12031",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther/{}",
                    "from": [
                        "POST /api/v1/rebookservice/rebook/difference",
                        "POST /api/v1/rebookservice/rebook"
                    ],
                    "method": "GET",
                    "service": "ts-order-other-service:12032",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/stationservice/stations/name/{}",
                    "from": [
                        "POST /api/v1/rebookservice/rebook/difference",
                        "POST /api/v1/rebookservice/rebook"
                    ],
                    "method": "GET",
                    "service": "ts-station-service:12345",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/inside_pay_service/inside_payment/difference",
                    "from": [
                        "POST /api/v1/rebookservice/rebook/difference"
                    ],
                    "method": "POST",
                    "service": "ts-inside-payment-service:18673",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/inside_pay_service/inside_payment/drawback/{}/{}",
                    "from": [
                        "POST /api/v1/rebookservice/rebook"
                    ],
                    "method": "GET",
                    "service": "ts-inside-payment-service:18673",
                    "type": "HTTP"
                }
            ],
            "endpoints": [
                {
                    "code_mapping": "rebook.controller.RebookController#home",
                    "method": "GET",
                    "name": "/api/v1/rebookservice/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "rebook.controller.RebookController#payDifference",
                    "method": "POST",
                    "name": "/api/v1/rebookservice/rebook/difference",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "rebook.controller.RebookController#rebook",
                    "method": "POST",
                    "name": "/api/v1/rebookservice/rebook",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "rebook.controller.RebookController"
        },
        {
            "calls": [
                {
                    "endpoint": "/api/v1/ticketinfoservice/ticketinfo",
                    "from": [
                        "POST /api/v1/preserveservice/preserve"
                    ],
                    "method": "POST",
                    "service": "ts-ticketinfo-service:15681",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/seatservice/seats",
                    "from": [
                        "POST /api/v1/preserveservice/preserve"
                    ],
                    "method": "POST",
                    "service": "ts-seat-service:18898",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/notifyservice/notification/preserve_success",
                    "from": [
                        "POST /api/v1/preserveservice/preserve"
                    ],
                    "method": "POST",
                    "service": "ts-notification-service:17853",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/userservice/users/id/{}",
                    "from": [
                        "POST /api/v1/preserveservice/preserve"
                    ],
                    "method": "GET",
                    "service": "ts-user-service:12342",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/assuranceservice/assurances/{}/{}",
                    "from": [
                        "POST /api/v1/preserveservice/preserve"
                    ],
                    "method": "GET",
                    "service": "ts-assurance-service:18888",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/stationservice/stations/id/{}",
                    "from": [
                        "POST /api/v1/preserveservice/preserve"
                    ],
                    "method": "GET",
                    "service": "ts-station-service:12345",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/securityservice/securityConfigs/{}",
                    "from": [
                        "POST /api/v1/preserveservice/preserve"
                    ],
                    "method": "GET",
                    "service": "ts-security-service:11188",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/travelservice/trip_detail",
                    "from": [
                        "POST /api/v1/preserveservice/preserve"
                    ],
                    "method": "POST",
                    "service": "ts-travel-service:12346",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/contactservice/contacts/{}",
                    "from": [
                        "POST /api/v1/preserveservice/preserve"
                    ],
                    "method": "GET",
                    "service": "ts-contacts-service:12347",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderservice/order",
                    "from": [
                        "POST /api/v1/preserveservice/preserve"
                    ],
                    "method": "POST",
                    "service": "ts-order-service:12031",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/foodservice/orders",
                    "from": [
                        "POST /api/v1/preserveservice/preserve"
                    ],
                    "method": "POST",
                    "service": "ts-food-service:18856",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/consignservice/consigns",
                    "from": [
                        "POST /api/v1/preserveservice/preserve"
                    ],
                    "method": "POST",
                    "service": "ts-consign-service:16111",
                    "type": "HTTP"
                }
            ],
            "endpoints": [
                {
                    "code_mapping": "preserve.controller.PreserveController#home",
                    "method": "GET",
                    "name": "/api/v1/preserveservice/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "preserve.controller.PreserveController#preserve",
                    "method": "POST",
                    "name": "/api/v1/preserveservice/preserve",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "preserve.controller.PreserveController"
        },
        {
            "calls": [],
            "endpoints": [
                {
                    "code_mapping": "food.controller.FoodStoreController#home",
                    "method": "GET",
                    "name": "/api/v1/foodmapservice/foodstores/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "food.controller.FoodStoreController#getAllFoodStores",
                    "method": "GET",
                    "name": "/api/v1/foodmapservice/foodstores",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "food.controller.FoodStoreController#getFoodStoresOfStation",
                    "method": "GET",
                    "name": "/api/v1/foodmapservice/foodstores/{stationId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "food.controller.FoodStoreController#getFoodStoresByStationIds",
                    "method": "POST",
                    "name": "/api/v1/foodmapservice/foodstores",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "ts-food-map-service:18855"
        },
        {
            "calls": [],
            "endpoints": [
                {
                    "code_mapping": "food.controller.TrainFoodController#home",
                    "method": "GET",
                    "name": "/api/v1/foodmapservice/trainfoods/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "food.controller.TrainFoodController#getAllTrainFood",
                    "method": "GET",
                    "name": "/api/v1/foodmapservice/trainfoods",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "food.controller.TrainFoodController#getTrainFoodOfTrip",
                    "method": "GET",
                    "name": "/api/v1/foodmapservice/trainfoods/{tripId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "ts-food-map-service:18855"
        },
        {
            "calls": [
                {
                    "endpoint": "/api/v1/auth",
                    "from": [
                        "POST /api/v1/userservice/users/register"
                    ],
                    "method": "POST",
                    "service": "ts-auth-service:12340",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/users/{}",
                    "from": [
                        "DELETE /api/v1/userservice/users/{}"
                    ],
                    "method": "DELETE",
                    "service": "ts-auth-service:12340",
                    "type": "HTTP"
                }
            ],
            "endpoints": [
                {
                    "code_mapping": "user.controller.UserController#testHello",
                    "method": "GET",
                    "name": "/api/v1/userservice/users/hello",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "user.controller.UserController#getAllUser",
                    "method": "GET",
                    "name": "/api/v1/userservice/users",
                    "return_type": "ResponseEntity<Response>",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "user.controller.UserController#getUserByUserName",
                    "method": "GET",
                    "name": "/api/v1/userservice/users/{userName}",
                    "return_type": "ResponseEntity<Response>",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "user.controller.UserController#getUserByUserId",
                    "method": "GET",
                    "name": "/api/v1/userservice/users/id/{userId}",
                    "return_type": "ResponseEntity<Response>",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "user.controller.UserController#registerUser",
                    "method": "POST",
                    "name": "/api/v1/userservice/users/register",
                    "return_type": "ResponseEntity<Response>",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "user.controller.UserController#deleteUserById",
                    "method": "DELETE",
                    "name": "/api/v1/userservice/users/{userId}",
                    "return_type": "ResponseEntity<Response>",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "user.controller.UserController#updateUser",
                    "method": "PUT",
                    "name": "/api/v1/userservice/users",
                    "return_type": "ResponseEntity<Response>",
                    "type": "HTTP"
                }
            ],
            "name": "ts-user-service:12342"
        },
        {
            "calls": [
                {
                    "endpoint": "/api/v1/ticketinfoservice/ticketinfo",
                    "from": [
                        "POST /api/v1/travelservice/trip_detail",
                        "POST /api/v1/travelservice/trips/left"
                    ],
                    "method": "POST",
                    "service": "ts-ticketinfo-service:15681",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderservice/order/{}/{}",
                    "from": [
                        "POST /api/v1/travelservice/trip_detail",
                        "POST /api/v1/travelservice/trips/left"
                    ],
                    "method": "GET",
                    "service": "ts-order-service:12031",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/trainservice/trains/{}",
                    "from": [
                        "GET /api/v1/travelservice/admin_trip",
                        "POST /api/v1/travelservice/trip_detail",
                        "POST /api/v1/travelservice/trips/left",
                        "GET /api/v1/travelservice/train_types/{}"
                    ],
                    "method": "GET",
                    "service": "ts-train-service:14567",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/ticketinfoservice/ticketinfo/{}",
                    "from": [
                        "POST /api/v1/travelservice/trip_detail",
                        "POST /api/v1/travelservice/trips/left"
                    ],
                    "method": "GET",
                    "service": "ts-ticketinfo-service:15681",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/routeservice/routes/{}",
                    "from": [
                        "GET /api/v1/travelservice/admin_trip",
                        "GET /api/v1/travelservice/routes/{}",
                        "POST /api/v1/travelservice/trip_detail",
                        "POST /api/v1/travelservice/trips/left"
                    ],
                    "method": "GET",
                    "service": "ts-route-service:11178",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/seatservice/seats/left_tickets",
                    "from": [
                        "POST /api/v1/travelservice/trip_detail",
                        "POST /api/v1/travelservice/trips/left"
                    ],
                    "method": "POST",
                    "service": "ts-seat-service:18898",
                    "type": "HTTP"
                }
            ],
            "endpoints": [
                {
                    "code_mapping": "travel.controller.TravelController#home",
                    "method": "GET",
                    "name": "/api/v1/travelservice/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "travel.controller.TravelController#getTrainTypeByTripId",
                    "method": "GET",
                    "name": "/api/v1/travelservice/train_types/{tripId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "travel.controller.TravelController#getRouteByTripId",
                    "method": "GET",
                    "name": "/api/v1/travelservice/routes/{tripId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "travel.controller.TravelController#getTripsByRouteId",
                    "method": "POST",
                    "name": "/api/v1/travelservice/trips/routes",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "travel.controller.TravelController#createTrip",
                    "method": "POST",
                    "name": "/api/v1/travelservice/trips",
                    "return_type": "HttpEntity<?>",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "travel.controller.TravelController#retrieve",
                    "method": "GET",
                    "name": "/api/v1/travelservice/trips/{tripId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "travel.controller.TravelController#updateTrip",
                    "method": "PUT",
                    "name": "/api/v1/travelservice/trips",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "travel.controller.TravelController#deleteTrip",
                    "method": "DELETE",
                    "name": "/api/v1/travelservice/trips/{tripId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "travel.controller.TravelController#queryInfo",
                    "method": "POST",
                    "name": "/api/v1/travelservice/trips/left",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "travel.controller.TravelController#getTripAllDetailInfo",
                    "method": "POST",
                    "name": "/api/v1/travelservice/trip_detail",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "travel.controller.TravelController#queryAll",
                    "method": "GET",
                    "name": "/api/v1/travelservice/trips",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "travel.controller.TravelController#adminQueryAll",
                    "method": "GET",
                    "name": "/api/v1/travelservice/admin_trip",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "ts-travel-service:12346"
        },
        {
            "calls": [
                {
                    "endpoint": "/api/v1/travelservice/routes/{}",
                    "from": [
                        "POST /api/v1/seatservice/seats",
                        "POST /api/v1/seatservice/seats/left_tickets"
                    ],
                    "method": "GET",
                    "service": "ts-travel-service:12346",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderservice/order/tickets",
                    "from": [
                        "POST /api/v1/seatservice/seats",
                        "POST /api/v1/seatservice/seats/left_tickets"
                    ],
                    "method": "POST",
                    "service": "ts-order-service:12031",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/travelservice/train_types/{}",
                    "from": [
                        "POST /api/v1/seatservice/seats",
                        "POST /api/v1/seatservice/seats/left_tickets"
                    ],
                    "method": "GET",
                    "service": "ts-travel-service:12346",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/travel2service/routes/{}",
                    "from": [
                        "POST /api/v1/seatservice/seats",
                        "POST /api/v1/seatservice/seats/left_tickets"
                    ],
                    "method": "GET",
                    "service": "ts-travel2-service:16346",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther/tickets",
                    "from": [
                        "POST /api/v1/seatservice/seats",
                        "POST /api/v1/seatservice/seats/left_tickets"
                    ],
                    "method": "POST",
                    "service": "ts-order-other-service:12032",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/travel2service/train_types/{}",
                    "from": [
                        "POST /api/v1/seatservice/seats",
                        "POST /api/v1/seatservice/seats/left_tickets"
                    ],
                    "method": "GET",
                    "service": "ts-travel2-service:16346",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/configservice/configs/{}",
                    "from": [
                        "POST /api/v1/seatservice/seats/left_tickets"
                    ],
                    "method": "GET",
                    "service": "ts-config-service:15679",
                    "type": "HTTP"
                }
            ],
            "endpoints": [
                {
                    "code_mapping": "seat.controller.SeatController#home",
                    "method": "GET",
                    "name": "/api/v1/seatservice/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "seat.controller.SeatController#create",
                    "method": "POST",
                    "name": "/api/v1/seatservice/seats",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "seat.controller.SeatController#getLeftTicketOfInterval",
                    "method": "POST",
                    "name": "/api/v1/seatservice/seats/left_tickets",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "ts-seat-service:18898"
        },
        {
            "calls": [
                {
                    "endpoint": "/api/v1/stationservice/stations/namelist",
                    "from": [
                        "POST /api/v1/orderservice/order/refresh"
                    ],
                    "method": "POST",
                    "service": "ts-station-service:12345",
                    "type": "HTTP"
                }
            ],
            "endpoints": [
                {
                    "code_mapping": "order.controller.OrderController#home",
                    "method": "GET",
                    "name": "/api/v1/orderservice/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "order.controller.OrderController#getTicketListByDateAndTripId",
                    "method": "POST",
                    "name": "/api/v1/orderservice/order/tickets",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "order.controller.OrderController#createNewOrder",
                    "method": "POST",
                    "name": "/api/v1/orderservice/order",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "order.controller.OrderController#addcreateNewOrder",
                    "method": "POST",
                    "name": "/api/v1/orderservice/order/admin",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "order.controller.OrderController#queryOrders",
                    "method": "POST",
                    "name": "/api/v1/orderservice/order/query",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "order.controller.OrderController#queryOrdersForRefresh",
                    "method": "POST",
                    "name": "/api/v1/orderservice/order/refresh",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "order.controller.OrderController#calculateSoldTicket",
                    "method": "GET",
                    "name": "/api/v1/orderservice/order/{travelDate}/{trainNumber}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "order.controller.OrderController#getOrderPrice",
                    "method": "GET",
                    "name": "/api/v1/orderservice/order/price/{orderId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "order.controller.OrderController#payOrder",
                    "method": "GET",
                    "name": "/api/v1/orderservice/order/orderPay/{orderId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "order.controller.OrderController#getOrderById",
                    "method": "GET",
                    "name": "/api/v1/orderservice/order/{orderId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "order.controller.OrderController#modifyOrder",
                    "method": "GET",
                    "name": "/api/v1/orderservice/order/status/{orderId}/{status}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "order.controller.OrderController#securityInfoCheck",
                    "method": "GET",
                    "name": "/api/v1/orderservice/order/security/{checkDate}/{accountId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "order.controller.OrderController#saveOrderInfo",
                    "method": "PUT",
                    "name": "/api/v1/orderservice/order",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "order.controller.OrderController#updateOrder",
                    "method": "PUT",
                    "name": "/api/v1/orderservice/order/admin",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "order.controller.OrderController#deleteOrder",
                    "method": "DELETE",
                    "name": "/api/v1/orderservice/order/{orderId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "order.controller.OrderController#findAllOrder",
                    "method": "GET",
                    "name": "/api/v1/orderservice/order",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "ts-order-service:12031"
        },
        {
            "calls": [
                {
                    "endpoint": "/api/v1/orderservice/order/status/{}/{}",
                    "from": [
                        "GET /api/v1/executeservice/execute/collected/{}",
                        "GET /api/v1/executeservice/execute/execute/{}"
                    ],
                    "method": "GET",
                    "service": "ts-order-service:12031",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther/status/{}/{}",
                    "from": [
                        "GET /api/v1/executeservice/execute/collected/{}",
                        "GET /api/v1/executeservice/execute/execute/{}"
                    ],
                    "method": "GET",
                    "service": "ts-order-other-service:12032",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderservice/order/{}",
                    "from": [
                        "GET /api/v1/executeservice/execute/collected/{}",
                        "GET /api/v1/executeservice/execute/execute/{}"
                    ],
                    "method": "GET",
                    "service": "ts-order-service:12031",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther/{}",
                    "from": [
                        "GET /api/v1/executeservice/execute/collected/{}",
                        "GET /api/v1/executeservice/execute/execute/{}"
                    ],
                    "method": "GET",
                    "service": "ts-order-other-service:12032",
                    "type": "HTTP"
                }
            ],
            "endpoints": [
                {
                    "code_mapping": "execute.controller.ExecuteControlller#home",
                    "method": "GET",
                    "name": "/api/v1/executeservice/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "execute.controller.ExecuteControlller#executeTicket",
                    "method": "GET",
                    "name": "/api/v1/executeservice/execute/execute/{orderId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "execute.controller.ExecuteControlller#collectTicket",
                    "method": "GET",
                    "name": "/api/v1/executeservice/execute/collected/{orderId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "execute.controller.ExecuteControlller"
        },
        {
            "calls": [
                {
                    "endpoint": "/api/v1/contactservice/contacts",
                    "from": [
                        "GET /api/v1/adminbasicservice/adminbasic/contacts"
                    ],
                    "method": "GET",
                    "service": "ts-contacts-service:12347",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/contactservice/contacts/{}",
                    "from": [
                        "DELETE /api/v1/adminbasicservice/adminbasic/contacts/{}"
                    ],
                    "method": "DELETE",
                    "service": "ts-contacts-service:12347",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/contactservice/contacts",
                    "from": [
                        "PUT /api/v1/adminbasicservice/adminbasic/contacts"
                    ],
                    "method": "PUT",
                    "service": "ts-contacts-service:12347",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/contactservice/contacts/admin",
                    "from": [
                        "POST /api/v1/adminbasicservice/adminbasic/contacts"
                    ],
                    "method": "POST",
                    "service": "ts-contacts-service:12347",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/stationservice/stations",
                    "from": [
                        "GET /api/v1/adminbasicservice/adminbasic/stations"
                    ],
                    "method": "GET",
                    "service": "ts-station-service:12345",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/stationservice/stations",
                    "from": [
                        "POST /api/v1/adminbasicservice/adminbasic/stations"
                    ],
                    "method": "POST",
                    "service": "ts-station-service:12345",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/stationservice/stations",
                    "from": [
                        "DELETE /api/v1/adminbasicservice/adminbasic/stations"
                    ],
                    "method": "DELETE",
                    "service": "ts-station-service:12345",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/stationservice/stations",
                    "from": [
                        "PUT /api/v1/adminbasicservice/adminbasic/stations"
                    ],
                    "method": "PUT",
                    "service": "ts-station-service:12345",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/trainservice/trains",
                    "from": [
                        "GET /api/v1/adminbasicservice/adminbasic/trains"
                    ],
                    "method": "GET",
                    "service": "ts-train-service:14567",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/trainservice/trains",
                    "from": [
                        "POST /api/v1/adminbasicservice/adminbasic/trains"
                    ],
                    "method": "POST",
                    "service": "ts-train-service:14567",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/trainservice/trains/{}",
                    "from": [
                        "DELETE /api/v1/adminbasicservice/adminbasic/trains/{}"
                    ],
                    "method": "DELETE",
                    "service": "ts-train-service:14567",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/trainservice/trains",
                    "from": [
                        "PUT /api/v1/adminbasicservice/adminbasic/trains"
                    ],
                    "method": "PUT",
                    "service": "ts-train-service:14567",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/configservice/configs",
                    "from": [
                        "GET /api/v1/adminbasicservice/adminbasic/configs"
                    ],
                    "method": "GET",
                    "service": "ts-config-service:15679",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/configservice/configs",
                    "from": [
                        "POST /api/v1/adminbasicservice/adminbasic/configs"
                    ],
                    "method": "POST",
                    "service": "ts-config-service:15679",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/configservice/configs/{}",
                    "from": [
                        "DELETE /api/v1/adminbasicservice/adminbasic/configs/{}"
                    ],
                    "method": "DELETE",
                    "service": "ts-config-service:15679",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/configservice/configs",
                    "from": [
                        "PUT /api/v1/adminbasicservice/adminbasic/configs"
                    ],
                    "method": "PUT",
                    "service": "ts-config-service:15679",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/priceservice/prices",
                    "from": [
                        "GET /api/v1/adminbasicservice/adminbasic/prices"
                    ],
                    "method": "GET",
                    "service": "ts-price-service:16579",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/priceservice/prices",
                    "from": [
                        "POST /api/v1/adminbasicservice/adminbasic/prices"
                    ],
                    "method": "POST",
                    "service": "ts-price-service:16579",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/priceservice/prices",
                    "from": [
                        "DELETE /api/v1/adminbasicservice/adminbasic/prices"
                    ],
                    "method": "DELETE",
                    "service": "ts-price-service:16579",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/priceservice/prices",
                    "from": [
                        "PUT /api/v1/adminbasicservice/adminbasic/prices"
                    ],
                    "method": "PUT",
                    "service": "ts-price-service:16579",
                    "type": "HTTP"
                }
            ],
            "endpoints": [
                {
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#home",
                    "method": "GET",
                    "name": "/api/v1/adminbasicservice/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#getAllContacts",
                    "method": "GET",
                    "name": "/api/v1/adminbasicservice/adminbasic/contacts",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#deleteContacts",
                    "method": "DELETE",
                    "name": "/api/v1/adminbasicservice/adminbasic/contacts/{contactsId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#modifyContacts",
                    "method": "PUT",
                    "name": "/api/v1/adminbasicservice/adminbasic/contacts",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#addContacts",
                    "method": "POST",
                    "name": "/api/v1/adminbasicservice/adminbasic/contacts",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#getAllStations",
                    "method": "GET",
                    "name": "/api/v1/adminbasicservice/adminbasic/stations",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#deleteStation",
                    "method": "DELETE",
                    "name": "/api/v1/adminbasicservice/adminbasic/stations",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#modifyStation",
                    "method": "PUT",
                    "name": "/api/v1/adminbasicservice/adminbasic/stations",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#addStation",
                    "method": "POST",
                    "name": "/api/v1/adminbasicservice/adminbasic/stations",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#getAllTrains",
                    "method": "GET",
                    "name": "/api/v1/adminbasicservice/adminbasic/trains",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#deleteTrain",
                    "method": "DELETE",
                    "name": "/api/v1/adminbasicservice/adminbasic/trains/{id}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#modifyTrain",
                    "method": "PUT",
                    "name": "/api/v1/adminbasicservice/adminbasic/trains",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#addTrain",
                    "method": "POST",
                    "name": "/api/v1/adminbasicservice/adminbasic/trains",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#getAllConfigs",
                    "method": "GET",
                    "name": "/api/v1/adminbasicservice/adminbasic/configs",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#deleteConfig",
                    "method": "DELETE",
                    "name": "/api/v1/adminbasicservice/adminbasic/configs/{name}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#modifyConfig",
                    "method": "PUT",
                    "name": "/api/v1/adminbasicservice/adminbasic/configs",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#addConfig",
                    "method": "POST",
                    "name": "/api/v1/adminbasicservice/adminbasic/configs",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#getAllPrices",
                    "method": "GET",
                    "name": "/api/v1/adminbasicservice/adminbasic/prices",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#deletePrice",
                    "method": "DELETE",
                    "name": "/api/v1/adminbasicservice/adminbasic/prices",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#modifyPrice",
                    "method": "PUT",
                    "name": "/api/v1/adminbasicservice/adminbasic/prices",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminbasic.controller.AdminBasicInfoController#addPrice",
                    "method": "POST",
                    "name": "/api/v1/adminbasicservice/adminbasic/prices",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "adminbasic.controller.AdminBasicInfoController"
        },
        {
            "calls": [
                {
                    "endpoint": "/api/v1/userservice/users",
                    "from": [
                        "GET /api/v1/adminuserservice/users"
                    ],
                    "method": "GET",
                    "service": "ts-user-service:12342",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/userservice/users/{}",
                    "from": [
                        "DELETE /api/v1/adminuserservice/users/{}"
                    ],
                    "method": "DELETE",
                    "service": "ts-user-service:12342",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/userservice/users",
                    "from": [
                        "PUT /api/v1/adminuserservice/users"
                    ],
                    "method": "PUT",
                    "service": "ts-user-service:12342",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/userservice/users/register",
                    "from": [
                        "POST /api/v1/adminuserservice/users"
                    ],
                    "method": "POST",
                    "service": "ts-user-service:12342",
                    "type": "HTTP"
                }
            ],
            "endpoints": [
                {
                    "code_mapping": "adminuser.controller.AdminUserController#home",
                    "method": "GET",
                    "name": "/api/v1/adminuserservice/users/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminuser.controller.AdminUserController#getAllUsers",
                    "method": "GET",
                    "name": "/api/v1/adminuserservice/users",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminuser.controller.AdminUserController#updateUser",
                    "method": "PUT",
                    "name": "/api/v1/adminuserservice/users",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminuser.controller.AdminUserController#addUser",
                    "method": "POST",
                    "name": "/api/v1/adminuserservice/users",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminuser.controller.AdminUserController#deleteUser",
                    "method": "DELETE",
                    "name": "/api/v1/adminuserservice/users/{userId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "adminuser.controller.AdminUserController"
        },
        {
            "calls": [
                {
                    "endpoint": "/api/v1/basicservice/basic/travel",
                    "from": [
                        "POST /api/v1/ticketinfoservice/ticketinfo"
                    ],
                    "method": "POST",
                    "service": "ts-basic-service:15680",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/basicservice/basic/{}",
                    "from": [
                        "GET /api/v1/ticketinfoservice/ticketinfo/{}"
                    ],
                    "method": "GET",
                    "service": "ts-basic-service:15680",
                    "type": "HTTP"
                }
            ],
            "endpoints": [
                {
                    "code_mapping": "ticketinfo.controller.TicketInfoController#home",
                    "method": "GET",
                    "name": "/api/v1/ticketinfoservice/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "ticketinfo.controller.TicketInfoController#queryForTravel",
                    "method": "POST",
                    "name": "/api/v1/ticketinfoservice/ticketinfo",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "ticketinfo.controller.TicketInfoController#queryForStationId",
                    "method": "GET",
                    "name": "/api/v1/ticketinfoservice/ticketinfo/{name}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "ts-ticketinfo-service:15681"
        },
        {
            "calls": [],
            "endpoints": [
                {
                    "code_mapping": "verifycode.controller.VerifyCodeController#imageCode",
                    "method": "GET",
                    "name": "/api/v1/verifycode/generate",
                    "return_type": "void",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "verifycode.controller.VerifyCodeController#verifyCode",
                    "method": "GET",
                    "name": "/api/v1/verifycode/verify/{verifyCode}",
                    "return_type": "boolean",
                    "type": "HTTP"
                }
            ],
            "name": "ts-verification-code-service:15678"
        },
        {
            "calls": [
                {
                    "endpoint": "/api/v1/orderservice/order/{}",
                    "from": [
                        "POST /api/v1/inside_pay_service/inside_payment"
                    ],
                    "method": "GET",
                    "service": "ts-order-service:12031",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther/{}",
                    "from": [
                        "POST /api/v1/inside_pay_service/inside_payment"
                    ],
                    "method": "GET",
                    "service": "ts-order-other-service:12032",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/paymentservice/payment",
                    "from": [
                        "POST /api/v1/inside_pay_service/inside_payment",
                        "POST /api/v1/inside_pay_service/inside_payment/difference"
                    ],
                    "method": "POST",
                    "service": "ts-payment-service:19001",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderservice/order/status/{}/{}",
                    "from": [
                        "POST /api/v1/inside_pay_service/inside_payment"
                    ],
                    "method": "GET",
                    "service": "ts-order-service:12031",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther/status/{}/{}",
                    "from": [
                        "POST /api/v1/inside_pay_service/inside_payment"
                    ],
                    "method": "GET",
                    "service": "ts-order-other-service:12032",
                    "type": "HTTP"
                }
            ],
            "endpoints": [
                {
                    "code_mapping": "inside_payment.controller.InsidePaymentController#home",
                    "method": "GET",
                    "name": "/api/v1/inside_pay_service/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "inside_payment.controller.InsidePaymentController#pay",
                    "method": "POST",
                    "name": "/api/v1/inside_pay_service/inside_payment",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "inside_payment.controller.InsidePaymentController#createAccount",
                    "method": "POST",
                    "name": "/api/v1/inside_pay_service/inside_payment/account",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "inside_payment.controller.InsidePaymentController#addMoney",
                    "method": "GET",
                    "name": "/api/v1/inside_pay_service/inside_payment/{userId}/{money}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "inside_payment.controller.InsidePaymentController#queryPayment",
                    "method": "GET",
                    "name": "/api/v1/inside_pay_service/inside_payment/payment",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "inside_payment.controller.InsidePaymentController#queryAccount",
                    "method": "GET",
                    "name": "/api/v1/inside_pay_service/inside_payment/account",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "inside_payment.controller.InsidePaymentController#drawBack",
                    "method": "GET",
                    "name": "/api/v1/inside_pay_service/inside_payment/drawback/{userId}/{money}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "inside_payment.controller.InsidePaymentController#payDifference",
                    "method": "POST",
                    "name": "/api/v1/inside_pay_service/inside_payment/difference",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "inside_payment.controller.InsidePaymentController#queryAddMoney",
                    "method": "GET",
                    "name": "/api/v1/inside_pay_service/inside_payment/money",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "ts-inside-payment-service:18673"
        },
        {
            "calls": [],
            "endpoints": [
                {
                    "code_mapping": "notification.controller.NotificationController#home",
                    "method": "GET",
                    "name": "/api/v1/notifyservice/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "notification.controller.NotificationController#preserve_success",
                    "method": "POST",
                    "name": "/api/v1/notifyservice/notification/preserve_success",
                    "return_type": "boolean",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "notification.controller.NotificationController#order_create_success",
                    "method": "POST",
                    "name": "/api/v1/notifyservice/notification/order_create_success",
                    "return_type": "boolean",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "notification.controller.NotificationController#order_changed_success",
                    "method": "POST",
                    "name": "/api/v1/notifyservice/notification/order_changed_success",
                    "return_type": "boolean",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "notification.controller.NotificationController#order_cancel_success",
                    "method": "POST",
                    "name": "/api/v1/notifyservice/notification/order_cancel_success",
                    "return_type": "boolean",
                    "type": "HTTP"
                }
            ],
            "name": "ts-notification-service:17853"
        },
        {
            "calls": [
                {
                    "endpoint": "/api/v1/notifyservice/notification/order_cancel_success",
                    "from": [
                        "GET /api/v1/cancelservice/cancel/{}/{}"
                    ],
                    "method": "POST",
                    "service": "ts-notification-service:17853",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderservice/order",
                    "from": [
                        "GET /api/v1/cancelservice/cancel/{}/{}"
                    ],
                    "method": "PUT",
                    "service": "ts-order-service:12031",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther",
                    "from": [
                        "GET /api/v1/cancelservice/cancel/{}/{}"
                    ],
                    "method": "PUT",
                    "service": "ts-order-other-service:12032",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/inside_pay_service/inside_payment/drawback/{}/{}",
                    "from": [
                        "GET /api/v1/cancelservice/cancel/{}/{}"
                    ],
                    "method": "GET",
                    "service": "ts-inside-payment-service:18673",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/userservice/users/id/{}",
                    "from": [
                        "GET /api/v1/cancelservice/cancel/{}/{}"
                    ],
                    "method": "GET",
                    "service": "ts-user-service:12342",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderservice/order/{}",
                    "from": [
                        "GET /api/v1/cancelservice/cancel/refound/{}",
                        "GET /api/v1/cancelservice/cancel/{}/{}"
                    ],
                    "method": "GET",
                    "service": "ts-order-service:12031",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther/{}",
                    "from": [
                        "GET /api/v1/cancelservice/cancel/refound/{}",
                        "GET /api/v1/cancelservice/cancel/{}/{}"
                    ],
                    "method": "GET",
                    "service": "ts-order-other-service:12032",
                    "type": "HTTP"
                }
            ],
            "endpoints": [
                {
                    "code_mapping": "cancel.controller.CancelController#home",
                    "method": "GET",
                    "name": "/api/v1/cancelservice/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "cancel.controller.CancelController#calculate",
                    "method": "GET",
                    "name": "/api/v1/cancelservice/cancel/refound/{orderId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "cancel.controller.CancelController#cancelTicket",
                    "method": "GET",
                    "name": "/api/v1/cancelservice/cancel/{orderId}/{loginId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "cancel.controller.CancelController"
        },
        {
            "calls": [
                {
                    "endpoint": "/api/v1/stationservice/stations/namelist",
                    "from": [
                        "POST /api/v1/orderOtherService/orderOther/refresh"
                    ],
                    "method": "POST",
                    "service": "ts-station-service:12345",
                    "type": "HTTP"
                }
            ],
            "endpoints": [
                {
                    "code_mapping": "other.controller.OrderOtherController#home",
                    "method": "GET",
                    "name": "/api/v1/orderOtherService/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "other.controller.OrderOtherController#getTicketListByDateAndTripId",
                    "method": "POST",
                    "name": "/api/v1/orderOtherService/orderOther/tickets",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "other.controller.OrderOtherController#createNewOrder",
                    "method": "POST",
                    "name": "/api/v1/orderOtherService/orderOther",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "other.controller.OrderOtherController#addcreateNewOrder",
                    "method": "POST",
                    "name": "/api/v1/orderOtherService/orderOther/admin",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "other.controller.OrderOtherController#queryOrders",
                    "method": "POST",
                    "name": "/api/v1/orderOtherService/orderOther/query",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "other.controller.OrderOtherController#queryOrdersForRefresh",
                    "method": "POST",
                    "name": "/api/v1/orderOtherService/orderOther/refresh",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "other.controller.OrderOtherController#calculateSoldTicket",
                    "method": "GET",
                    "name": "/api/v1/orderOtherService/orderOther/{travelDate}/{trainNumber}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "other.controller.OrderOtherController#getOrderPrice",
                    "method": "GET",
                    "name": "/api/v1/orderOtherService/orderOther/price/{orderId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "other.controller.OrderOtherController#payOrder",
                    "method": "GET",
                    "name": "/api/v1/orderOtherService/orderOther/orderPay/{orderId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "other.controller.OrderOtherController#getOrderById",
                    "method": "GET",
                    "name": "/api/v1/orderOtherService/orderOther/{orderId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "other.controller.OrderOtherController#modifyOrder",
                    "method": "GET",
                    "name": "/api/v1/orderOtherService/orderOther/status/{orderId}/{status}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "other.controller.OrderOtherController#securityInfoCheck",
                    "method": "GET",
                    "name": "/api/v1/orderOtherService/orderOther/security/{checkDate}/{accountId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "other.controller.OrderOtherController#saveOrderInfo",
                    "method": "PUT",
                    "name": "/api/v1/orderOtherService/orderOther",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "other.controller.OrderOtherController#updateOrder",
                    "method": "PUT",
                    "name": "/api/v1/orderOtherService/orderOther/admin",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "other.controller.OrderOtherController#deleteOrder",
                    "method": "DELETE",
                    "name": "/api/v1/orderOtherService/orderOther/{orderId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "other.controller.OrderOtherController#findAllOrder",
                    "method": "GET",
                    "name": "/api/v1/orderOtherService/orderOther",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "ts-order-other-service:12032"
        },
        {
            "calls": [],
            "endpoints": [
                {
                    "code_mapping": "fdse.microservice.controller.StationController#home",
                    "method": "GET",
                    "name": "/api/v1/stationservice/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "fdse.microservice.controller.StationController#query",
                    "method": "GET",
                    "name": "/api/v1/stationservice/stations",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "fdse.microservice.controller.StationController#create",
                    "method": "POST",
                    "name": "/api/v1/stationservice/stations",
                    "return_type": "ResponseEntity<Response>",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "fdse.microservice.controller.StationController#update",
                    "method": "PUT",
                    "name": "/api/v1/stationservice/stations",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "fdse.microservice.controller.StationController#delete",
                    "method": "DELETE",
                    "name": "/api/v1/stationservice/stations",
                    "return_type": "ResponseEntity<Response>",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "fdse.microservice.controller.StationController#queryForStationId",
                    "method": "GET",
                    "name": "/api/v1/stationservice/stations/id/{stationNameForId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "fdse.microservice.controller.StationController#queryForIdBatch",
                    "method": "POST",
                    "name": "/api/v1/stationservice/stations/idlist",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "fdse.microservice.controller.StationController#queryById",
                    "method": "GET",
                    "name": "/api/v1/stationservice/stations/name/{stationIdForName}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "fdse.microservice.controller.StationController#queryForNameBatch",
                    "method": "POST",
                    "name": "/api/v1/stationservice/stations/namelist",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "ts-station-service:12345"
        },
        {
            "calls": [],
            "endpoints": [
                {
                    "code_mapping": "consignprice.controller.ConsignPriceController#home",
                    "method": "GET",
                    "name": "/api/v1/consignpriceservice/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "consignprice.controller.ConsignPriceController#getPriceByWeightAndRegion",
                    "method": "GET",
                    "name": "/api/v1/consignpriceservice/consignprice/{weight}/{isWithinRegion}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "consignprice.controller.ConsignPriceController#getPriceInfo",
                    "method": "GET",
                    "name": "/api/v1/consignpriceservice/consignprice/price",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "consignprice.controller.ConsignPriceController#getPriceConfig",
                    "method": "GET",
                    "name": "/api/v1/consignpriceservice/consignprice/config",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "consignprice.controller.ConsignPriceController#modifyPriceConfig",
                    "method": "POST",
                    "name": "/api/v1/consignpriceservice/consignprice",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "ts-consign-price-service:16110"
        },
        {
            "calls": [
                {
                    "endpoint": "/api/v1/orderservice/order",
                    "from": [
                        "GET /api/v1/adminorderservice/adminorder"
                    ],
                    "method": "GET",
                    "service": "ts-order-service:12031",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther",
                    "from": [
                        "GET /api/v1/adminorderservice/adminorder"
                    ],
                    "method": "GET",
                    "service": "ts-order-other-service:12032",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderservice/order/{}",
                    "from": [
                        "DELETE /api/v1/adminorderservice/adminorder/{}/{}"
                    ],
                    "method": "DELETE",
                    "service": "ts-order-service:12031",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther/{}",
                    "from": [
                        "DELETE /api/v1/adminorderservice/adminorder/{}/{}"
                    ],
                    "method": "DELETE",
                    "service": "ts-order-other-service:12032",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderservice/order/admin",
                    "from": [
                        "PUT /api/v1/adminorderservice/adminorder"
                    ],
                    "method": "PUT",
                    "service": "ts-order-service:12031",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther/admin",
                    "from": [
                        "PUT /api/v1/adminorderservice/adminorder"
                    ],
                    "method": "PUT",
                    "service": "ts-order-other-service:12032",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderservice/order/admin",
                    "from": [
                        "POST /api/v1/adminorderservice/adminorder"
                    ],
                    "method": "POST",
                    "service": "ts-order-service:12031",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther/admin",
                    "from": [
                        "POST /api/v1/adminorderservice/adminorder"
                    ],
                    "method": "POST",
                    "service": "ts-order-other-service:12032",
                    "type": "HTTP"
                }
            ],
            "endpoints": [
                {
                    "code_mapping": "adminorder.controller.AdminOrderController#home",
                    "method": "GET",
                    "name": "/api/v1/adminorderservice/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminorder.controller.AdminOrderController#getAllOrders",
                    "method": "GET",
                    "name": "/api/v1/adminorderservice/adminorder",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminorder.controller.AdminOrderController#addOrder",
                    "method": "POST",
                    "name": "/api/v1/adminorderservice/adminorder",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminorder.controller.AdminOrderController#updateOrder",
                    "method": "PUT",
                    "name": "/api/v1/adminorderservice/adminorder",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminorder.controller.AdminOrderController#deleteOrder",
                    "method": "DELETE",
                    "name": "/api/v1/adminorderservice/adminorder/{orderId}/{trainNumber}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "adminorder.controller.AdminOrderController"
        },
        {
            "calls": [
                {
                    "endpoint": "/api/v1/ticketinfoservice/ticketinfo",
                    "from": [
                        "POST /api/v1/preserveotherservice/preserveOther"
                    ],
                    "method": "POST",
                    "service": "ts-ticketinfo-service:15681",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/seatservice/seats",
                    "from": [
                        "POST /api/v1/preserveotherservice/preserveOther"
                    ],
                    "method": "POST",
                    "service": "ts-seat-service:18898",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/notifyservice/notification/preserve_success",
                    "from": [
                        "POST /api/v1/preserveotherservice/preserveOther"
                    ],
                    "method": "POST",
                    "service": "ts-notification-service:17853",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/userservice/users/id/{}",
                    "from": [
                        "POST /api/v1/preserveotherservice/preserveOther"
                    ],
                    "method": "GET",
                    "service": "ts-user-service:12342",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/assuranceservice/assurances/{}/{}",
                    "from": [
                        "POST /api/v1/preserveotherservice/preserveOther"
                    ],
                    "method": "GET",
                    "service": "ts-assurance-service:18888",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/stationservice/stations/id/{}",
                    "from": [
                        "POST /api/v1/preserveotherservice/preserveOther"
                    ],
                    "method": "GET",
                    "service": "ts-station-service:12345",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/securityservice/securityConfigs/{}",
                    "from": [
                        "POST /api/v1/preserveotherservice/preserveOther"
                    ],
                    "method": "GET",
                    "service": "ts-security-service:11188",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/travel2service/trip_detail",
                    "from": [
                        "POST /api/v1/preserveotherservice/preserveOther"
                    ],
                    "method": "POST",
                    "service": "ts-travel2-service:16346",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/contactservice/contacts/{}",
                    "from": [
                        "POST /api/v1/preserveotherservice/preserveOther"
                    ],
                    "method": "GET",
                    "service": "ts-contacts-service:12347",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther",
                    "from": [
                        "POST /api/v1/preserveotherservice/preserveOther"
                    ],
                    "method": "POST",
                    "service": "ts-order-other-service:12032",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/foodservice/orders",
                    "from": [
                        "POST /api/v1/preserveotherservice/preserveOther"
                    ],
                    "method": "POST",
                    "service": "ts-food-service:18856",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/consignservice/consigns",
                    "from": [
                        "POST /api/v1/preserveotherservice/preserveOther"
                    ],
                    "method": "POST",
                    "service": "ts-consign-service:16111",
                    "type": "HTTP"
                }
            ],
            "endpoints": [
                {
                    "code_mapping": "preserveOther.controller.PreserveOtherController#home",
                    "method": "GET",
                    "name": "/api/v1/preserveotherservice/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "preserveOther.controller.PreserveOtherController#preserve",
                    "method": "POST",
                    "name": "/api/v1/preserveotherservice/preserveOther",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "preserveOther.controller.PreserveOtherController"
        },
        {
            "calls": [
                {
                    "endpoint": "/api/v1/routeservice/routes",
                    "from": [
                        "GET /api/v1/adminrouteservice/adminroute"
                    ],
                    "method": "GET",
                    "service": "ts-route-service:11178",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/routeservice/routes",
                    "from": [
                        "POST /api/v1/adminrouteservice/adminroute"
                    ],
                    "method": "POST",
                    "service": "ts-route-service:11178",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/routeservice/routes/{}",
                    "from": [
                        "DELETE /api/v1/adminrouteservice/adminroute/{}"
                    ],
                    "method": "DELETE",
                    "service": "ts-route-service:11178",
                    "type": "HTTP"
                }
            ],
            "endpoints": [
                {
                    "code_mapping": "adminroute.controller.AdminRouteController#home",
                    "method": "GET",
                    "name": "/api/v1/adminrouteservice/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminroute.controller.AdminRouteController#getAllRoutes",
                    "method": "GET",
                    "name": "/api/v1/adminrouteservice/adminroute",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminroute.controller.AdminRouteController#addRoute",
                    "method": "POST",
                    "name": "/api/v1/adminrouteservice/adminroute",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "adminroute.controller.AdminRouteController#deleteRoute",
                    "method": "DELETE",
                    "name": "/api/v1/adminrouteservice/adminroute/{routeId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "adminroute.controller.AdminRouteController"
        },
        {
            "calls": [
                {
                    "endpoint": "/api/v1/orderservice/order/security/{}/{}",
                    "from": [
                        "GET /api/v1/securityservice/securityConfigs/{}"
                    ],
                    "method": "GET",
                    "service": "ts-order-service:12031",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/orderOtherService/orderOther/security/{}/{}",
                    "from": [
                        "GET /api/v1/securityservice/securityConfigs/{}"
                    ],
                    "method": "GET",
                    "service": "ts-order-other-service:12032",
                    "type": "HTTP"
                }
            ],
            "endpoints": [
                {
                    "code_mapping": "security.controller.SecurityController#home",
                    "method": "GET",
                    "name": "/api/v1/securityservice/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "security.controller.SecurityController#findAllSecurityConfig",
                    "method": "GET",
                    "name": "/api/v1/securityservice/securityConfigs",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "security.controller.SecurityController#create",
                    "method": "POST",
                    "name": "/api/v1/securityservice/securityConfigs",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "security.controller.SecurityController#update",
                    "method": "PUT",
                    "name": "/api/v1/securityservice/securityConfigs",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "security.controller.SecurityController#delete",
                    "method": "DELETE",
                    "name": "/api/v1/securityservice/securityConfigs/{id}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "security.controller.SecurityController#check",
                    "method": "GET",
                    "name": "/api/v1/securityservice/securityConfigs/{accountId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "ts-security-service:11188"
        },
        {
            "calls": [],
            "endpoints": [
                {
                    "code_mapping": "auth.controller.AuthController#getHello",
                    "method": "GET",
                    "name": "/api/v1/auth/hello",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "auth.controller.AuthController#createDefaultUser",
                    "method": "POST",
                    "name": "/api/v1/auth",
                    "return_type": "HttpEntity<Response>",
                    "type": "HTTP"
                }
            ],
            "name": "ts-auth-service:12340"
        },
        {
            "calls": [
                {
                    "endpoint": "/api/v1/verifycode/verify/{}",
                    "from": [
                        "POST /api/v1/users/login"
                    ],
                    "method": "GET",
                    "service": "ts-verification-code-service:15678",
                    "type": "HTTP"
                }
            ],
            "endpoints": [
                {
                    "code_mapping": "auth.controller.UserController#getHello",
                    "method": "GET",
                    "name": "/api/v1/users/hello",
                    "return_type": "Object",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "auth.controller.UserController#getToken",
                    "method": "POST",
                    "name": "/api/v1/users/login",
                    "return_type": "ResponseEntity<Response>",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "auth.controller.UserController#getAllUser",
                    "method": "GET",
                    "name": "/api/v1/users",
                    "return_type": "ResponseEntity<List<User>>",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "auth.controller.UserController#deleteUserById",
                    "method": "DELETE",
                    "name": "/api/v1/users/{userId}",
                    "return_type": "ResponseEntity<Response>",
                    "type": "HTTP"
                }
            ],
            "name": "ts-auth-service:12340"
        },
        {
            "calls": [],
            "endpoints": [
                {
                    "code_mapping": "com.trainticket.controller.PaymentController#home",
                    "method": "GET",
                    "name": "/api/v1/paymentservice/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "com.trainticket.controller.PaymentController#pay",
                    "method": "POST",
                    "name": "/api/v1/paymentservice/payment",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "com.trainticket.controller.PaymentController#addMoney",
                    "method": "POST",
                    "name": "/api/v1/paymentservice/payment/money",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "com.trainticket.controller.PaymentController#query",
                    "method": "GET",
                    "name": "/api/v1/paymentservice/payment",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "ts-payment-service:19001"
        },
        {
            "calls": [
                {
                    "endpoint": "/api/v1/foodmapservice/trainfoods/{}",
                    "from": [
                        "GET /api/v1/foodservice/foods/{}/{}/{}/{}"
                    ],
                    "method": "GET",
                    "service": "ts-food-map-service:18855",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/travelservice/routes/{}",
                    "from": [
                        "GET /api/v1/foodservice/foods/{}/{}/{}/{}"
                    ],
                    "method": "GET",
                    "service": "ts-travel-service:12346",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/stationservice/stations/id/{}",
                    "from": [
                        "GET /api/v1/foodservice/foods/{}/{}/{}/{}",
                        "GET /api/v1/foodservice/foods/{}/{}/{}/{}"
                    ],
                    "method": "GET",
                    "service": "ts-station-service:12345",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/foodmapservice/foodstores",
                    "from": [
                        "GET /api/v1/foodservice/foods/{}/{}/{}/{}"
                    ],
                    "method": "POST",
                    "service": "ts-food-map-service:18855",
                    "type": "HTTP"
                }
            ],
            "endpoints": [
                {
                    "code_mapping": "foodsearch.controller.FoodController#home",
                    "method": "GET",
                    "name": "/api/v1/foodservice/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "foodsearch.controller.FoodController#findAllFoodOrder",
                    "method": "GET",
                    "name": "/api/v1/foodservice/orders",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "foodsearch.controller.FoodController#createFoodOrder",
                    "method": "POST",
                    "name": "/api/v1/foodservice/orders",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "foodsearch.controller.FoodController#updateFoodOrder",
                    "method": "PUT",
                    "name": "/api/v1/foodservice/orders",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "foodsearch.controller.FoodController#deleteFoodOrder",
                    "method": "DELETE",
                    "name": "/api/v1/foodservice/orders/{orderId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "foodsearch.controller.FoodController#findFoodOrderByOrderId",
                    "method": "GET",
                    "name": "/api/v1/foodservice/orders/{orderId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "foodsearch.controller.FoodController#getAllFood",
                    "method": "GET",
                    "name": "/api/v1/foodservice/foods/{date}/{startStation}/{endStation}/{tripId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "ts-food-service:18856"
        },
        {
            "calls": [],
            "endpoints": [
                {
                    "code_mapping": "route.controller.RouteController#home",
                    "method": "GET",
                    "name": "/api/v1/routeservice/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "route.controller.RouteController#createAndModifyRoute",
                    "method": "POST",
                    "name": "/api/v1/routeservice/routes",
                    "return_type": "ResponseEntity<Response>",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "route.controller.RouteController#deleteRoute",
                    "method": "DELETE",
                    "name": "/api/v1/routeservice/routes/{routeId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "route.controller.RouteController#queryById",
                    "method": "GET",
                    "name": "/api/v1/routeservice/routes/{routeId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "route.controller.RouteController#queryAll",
                    "method": "GET",
                    "name": "/api/v1/routeservice/routes",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "route.controller.RouteController#queryByStartAndTerminal",
                    "method": "GET",
                    "name": "/api/v1/routeservice/routes/{startId}/{terminalId}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "ts-route-service:11178"
        },
        {
            "calls": [
                {
                    "endpoint": "/api/v1/stationservice/stations/id/{}",
                    "from": [
                        "GET /api/v1/basicservice/basic/{}",
                        "POST /api/v1/basicservice/basic/travel"
                    ],
                    "method": "GET",
                    "service": "ts-station-service:12345",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/trainservice/trains/{}",
                    "from": [
                        "POST /api/v1/basicservice/basic/travel"
                    ],
                    "method": "GET",
                    "service": "ts-train-service:14567",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/routeservice/routes/{}",
                    "from": [
                        "POST /api/v1/basicservice/basic/travel"
                    ],
                    "method": "GET",
                    "service": "ts-route-service:11178",
                    "type": "HTTP"
                },
                {
                    "endpoint": "/api/v1/priceservice/prices/{}/{}",
                    "from": [
                        "POST /api/v1/basicservice/basic/travel"
                    ],
                    "method": "GET",
                    "service": "ts-price-service:16579",
                    "type": "HTTP"
                }
            ],
            "endpoints": [
                {
                    "code_mapping": "fdse.microservice.controller.BasicController#home",
                    "method": "GET",
                    "name": "/api/v1/basicservice/welcome",
                    "return_type": "String",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "fdse.microservice.controller.BasicController#queryForTravel",
                    "method": "POST",
                    "name": "/api/v1/basicservice/basic/travel",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                },
                {
                    "code_mapping": "fdse.microservice.controller.BasicController#queryForStationId",
                    "method": "GET",
                    "name": "/api/v1/basicservice/basic/{stationName}",
                    "return_type": "HttpEntity",
                    "type": "HTTP"
                }
            ],
            "name": "ts-basic-service:15680"
        },
        {
            "calls": [],
            "endpoints": [
                {
                    "code_mapping": "unknown",
                    "method": "POST /api/v1/orderservice/order/{}",
                    "name": "/api/v1/orderservice/order/{}",
                    "return_type": "",
                    "type": "HTTP"
                }
            ],
            "name": "ts-order-service:12031"
        },
        {
            "calls": [],
            "endpoints": [
                {
                    "code_mapping": "unknown",
                    "method": "POST /api/v1/orderOtherService/orderOther/{}",
                    "name": "/api/v1/orderOtherService/orderOther/{}",
                    "return_type": "",
                    "type": "HTTP"
                }
            ],
            "name": "ts-order-other-service:12032"
        }
    ]
};

// STEP 1: MAP URL TO CODE METHOD
const services = x.services;
const strip_url = (foo) => foo.replaceAll(/\{[^{]*\}/g, "{}");
let code_url = {};
let result_1 = {};

for (const svc of services) {
  for (const endpoint of svc.endpoints) {
    if (endpoint.code_mapping !== "unknown") {
	  code_url[`${endpoint.method} ${strip_url(endpoint.name)}`] = endpoint.code_mapping;
	  result_1[endpoint.code_mapping] = {};
	}
  }
}

// STEP 2: CREATE CALL GRAPH USING OBJECT KEYS AS SETS
for (const svc of services) {
  for (const call of svc.calls) {
    const name = code_url[`${call.method} ${call.endpoint}`];
	if (name) {
      for (const from of call.from.map((f) => code_url[f])) {
        result_1[from][name] = 0;
      }
	}
  }
}

// Enhance manually-constructed ground truth with which services connect to each other
const ground_truth = {
  "adminbasic.controller.AdminBasicInfoController#addConfig": {},
  "adminbasic.controller.AdminBasicInfoController#addContacts": {},
  "adminbasic.controller.AdminBasicInfoController#addPrice": {},
  "adminbasic.controller.AdminBasicInfoController#addStation": {},
  "adminbasic.controller.AdminBasicInfoController#addTrain": {},
  "adminbasic.controller.AdminBasicInfoController#deleteConfig": {},
  "adminbasic.controller.AdminBasicInfoController#deleteContacts": {},
  "adminbasic.controller.AdminBasicInfoController#deletePrice": {},
  "adminbasic.controller.AdminBasicInfoController#deleteStation": {},
  "adminbasic.controller.AdminBasicInfoController#deleteTrain": {},
  "adminbasic.controller.AdminBasicInfoController#getAllConfigs": {},
  "adminbasic.controller.AdminBasicInfoController#getAllContacts": {},
  "adminbasic.controller.AdminBasicInfoController#getAllPrices": {},
  "adminbasic.controller.AdminBasicInfoController#getAllStations": {},
  "adminbasic.controller.AdminBasicInfoController#getAllTrains": {},
  "adminbasic.controller.AdminBasicInfoController#home": {},
  "adminbasic.controller.AdminBasicInfoController#modifyConfig": {},
  "adminbasic.controller.AdminBasicInfoController#modifyContacts": {},
  "adminbasic.controller.AdminBasicInfoController#modifyPrice": {},
  "adminbasic.controller.AdminBasicInfoController#modifyStation": {},
  "adminbasic.controller.AdminBasicInfoController#modifyTrain": {},
  "adminorder.controller.AdminOrderController#addOrder": {},
  "adminorder.controller.AdminOrderController#deleteOrder": {},
  "adminorder.controller.AdminOrderController#getAllOrders": {},
  "adminorder.controller.AdminOrderController#home": {},
  "adminorder.controller.AdminOrderController#updateOrder": {},
  "adminroute.controller.AdminRouteController#addRoute": {},
  "adminroute.controller.AdminRouteController#deleteRoute": {},
  "adminroute.controller.AdminRouteController#getAllRoutes": {},
  "adminroute.controller.AdminRouteController#home": {},
  "admintravel.controller.AdminTravelController#addTravel": {},
  "admintravel.controller.AdminTravelController#deleteTravel": {},
  "admintravel.controller.AdminTravelController#getAllTravels": {},
  "admintravel.controller.AdminTravelController#home": {},
  "admintravel.controller.AdminTravelController#updateTravel": {},
  "adminuser.controller.AdminUserController#addUser": {},
  "adminuser.controller.AdminUserController#deleteUser": {},
  "adminuser.controller.AdminUserController#getAllUsers": {},
  "adminuser.controller.AdminUserController#home": {},
  "adminuser.controller.AdminUserController#updateUser": {},
  "assurance.controller.AssuranceController#home": {},
  "cancel.controller.CancelController#home": {},
  "com.trainticket.controller.PaymentController#home": {},
  "config.controller.ConfigController#home": {},
  "consign.controller.ConsignController#home": {},
  "consignprice.controller.ConsignPriceController#home": {},
  "contacts.controller.ContactsController#home": {},
  "execute.controller.ExecuteControlller#home": {},
  "fdse.microservice.controller.BasicController#home": {},
  "fdse.microservice.controller.StationController#home": {},
  "food.controller.FoodStoreController#home": {},
  "food.controller.TrainFoodController#home": {},
  "foodsearch.controller.FoodController#home": {},
  "inside_payment.controller.InsidePaymentController#home": {},
  "notification.controller.NotificationController#home": {},
  "order.controller.OrderController#home": {},
  "other.controller.OrderOtherController#home": {},
  "plan.controller.RoutePlanController#home": {},
  "preserve.controller.PreserveController#home": {},
  "preserveOther.controller.PreserveOtherController#home": {},
  "price.controller.PriceController#home": {},
  "rebook.controller.RebookController#home": {},
  "route.controller.RouteController#home": {},
  "seat.controller.SeatController#home": {},
  "security.controller.SecurityController#home": {},
  "ticketinfo.controller.TicketInfoController#home": {},
  "train.controller.TrainController#home": {},
  "travel.controller.TravelController#home": {},
  "travel2.controller.Travel2Controller#home": {},
  "travelplan.controller.TravelPlanController#home": {},
  "auth.controller.AuthController#getHello": {},
  "auth.controller.UserController#getHello": {},
  "user.controller.UserController#testHello": {},
  "assurance.controller.AssuranceController#getAllAssurances": {
    "Assurance": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "assurance.controller.AssuranceController#deleteAssurance": {
    "Assurance": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": true
    }
  },
  "assurance.controller.AssuranceController#deleteAssuranceByOrderId": {
    "Assurance": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": true
    }
  },
  "assurance.controller.AssuranceController#modifyAssurance": {
    "Assurance": {
      "CREATE": false,
      "READ": true,
      "UPDATE": true,
      "DELETE": false
    }
  },
  "assurance.controller.AssuranceController#createNewAssurance": {
    "Assurance": {
      "CREATE": true,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "assurance.controller.AssuranceController#getAssuranceById": {
    "Assurance": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "assurance.controller.AssuranceController#findAssuranceByOrderId": {
    "Assurance": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "assurance.controller.AssuranceController#getAllAssuranceType": {},
  "auth.controller.AuthController#createDefaultUser": {
    "User": { "CREATE": true, "READ": false, "UPDATE": false, "DELETE": false }
  },
  "auth.controller.UserController#getToken": {
    "User": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "auth.controller.UserController#getAllUser": {
    "User": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "auth.controller.UserController#deleteUserById": {
    "User": { "CREATE": false, "READ": false, "UPDATE": false, "DELETE": true }
  },

  "config.controller.ConfigController#queryAll": {
    "Config": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "config.controller.ConfigController#createConfig": {
    "Config": { "CREATE": true, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "config.controller.ConfigController#updateConfig": {
    "Config": { "CREATE": false, "READ": true, "UPDATE": true, "DELETE": false }
  },
  "config.controller.ConfigController#deleteConfig": {
    "Config": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": true }
  },
  "config.controller.ConfigController#retrieve": {
    "Config": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },

  "consignprice.controller.ConsignPriceController#getPriceByWeightAndRegion": {
    "ConsignPrice": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "consignprice.controller.ConsignPriceController#getPriceInfo": {
    "ConsignPrice": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "consignprice.controller.ConsignPriceController#getPriceConfig": {
    "ConsignPrice": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "consignprice.controller.ConsignPriceController#modifyPriceConfig": {
    "ConsignPrice": {
      "CREATE": true,
      "READ": true,
      "UPDATE": true,
      "DELETE": false
    }
  },

  "consign.controller.ConsignController#insertConsign": {
    "ConsignRecord": {
      "CREATE": true,
      "READ": false,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "consign.controller.ConsignController#updateConsign": {
    "ConsignRecord": {
      "CREATE": true,
      "READ": true,
      "UPDATE": true,
      "DELETE": false
    }
  },
  "consign.controller.ConsignController#findByAccountId": {
    "ConsignRecord": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "consign.controller.ConsignController#findByOrderId": {
    "ConsignRecord": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "consign.controller.ConsignController#findByConsignee": {
    "ConsignRecord": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },

  "contacts.controller.ContactsController#getAllContacts": {
    "Contacts": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "contacts.controller.ContactsController#createNewContacts": {
    "Contacts": {
      "CREATE": true,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "contacts.controller.ContactsController#createNewContactsAdmin": {
    "Contacts": {
      "CREATE": true,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "contacts.controller.ContactsController#deleteContacts": {
    "Contacts": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": true
    }
  },
  "contacts.controller.ContactsController#modifyContacts": {
    "Contacts": {
      "CREATE": false,
      "READ": true,
      "UPDATE": true,
      "DELETE": false
    }
  },
  "contacts.controller.ContactsController#findContactsByAccountId": {
    "Contacts": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "contacts.controller.ContactsController#getContactsByContactsId": {
    "Contacts": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },

  "food.controller.FoodStoreController#getAllFoodStores": {
    "FoodStore": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "food.controller.FoodStoreController#getFoodStoresOfStation": {
    "FoodStore": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "food.controller.FoodStoreController#getFoodStoresByStationIds": {
    "FoodStore": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "food.controller.TrainFoodController#getAllTrainFood": {
    "TrainFood": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "food.controller.TrainFoodController#getTrainFoodOfTrip": {
    "TrainFood": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "foodsearch.controller.FoodController#findAllFoodOrder": {
    "FoodOrder": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "foodsearch.controller.FoodController#createFoodOrder": {
    "FoodOrder": {
      "CREATE": true,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "foodsearch.controller.FoodController#updateFoodOrder": {
    "FoodOrder": {
      "CREATE": false,
      "READ": true,
      "UPDATE": true,
      "DELETE": false
    }
  },
  "foodsearch.controller.FoodController#deleteFoodOrder": {
    "FoodOrder": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": true
    }
  },
  "foodsearch.controller.FoodController#findFoodOrderByOrderId": {
    "FoodOrder": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "foodsearch.controller.FoodController#getAllFood": {},
  "inside_payment.controller.InsidePaymentController#pay": {
    "Money": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    },
    "Payment": {
      "CREATE": true,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "inside_payment.controller.InsidePaymentController#createAccount": {
    "Money": {
      "CREATE": true,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "inside_payment.controller.InsidePaymentController#addMoney": {
    "Money": {
      "CREATE": true,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "inside_payment.controller.InsidePaymentController#queryPayment": {
    "Payment": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "inside_payment.controller.InsidePaymentController#queryAccount": {
    "Money": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    },
    "Payment": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "inside_payment.controller.InsidePaymentController#drawBack": {
    "Money": {
      "CREATE": true,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "inside_payment.controller.InsidePaymentController#payDifference": {
    "Money": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    },
    "Payment": {
      "CREATE": true,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "inside_payment.controller.InsidePaymentController#queryAddMoney": {
    "Money": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "other.controller.OrderOtherController#getTicketListByDateAndTripId": {
    "Order": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "other.controller.OrderOtherController#createNewOrder": {
    "Order": { "CREATE": true, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "other.controller.OrderOtherController#addcreateNewOrder": {
    "Order": { "CREATE": true, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "other.controller.OrderOtherController#queryOrders": {
    "Order": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "other.controller.OrderOtherController#queryOrdersForRefresh": {
    "Order": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "other.controller.OrderOtherController#calculateSoldTicket": {
    "Order": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "other.controller.OrderOtherController#getOrderPrice": {
    "Order": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "other.controller.OrderOtherController#payOrder": {
    "Order": { "CREATE": false, "READ": true, "UPDATE": true, "DELETE": false }
  },
  "other.controller.OrderOtherController#getOrderById": {
    "Order": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "other.controller.OrderOtherController#modifyOrder": {
    "Order": { "CREATE": false, "READ": true, "UPDATE": true, "DELETE": false }
  },
  "other.controller.OrderOtherController#securityInfoCheck": {
    "Order": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "other.controller.OrderOtherController#saveOrderInfo": {
    "Order": { "CREATE": false, "READ": true, "UPDATE": true, "DELETE": false }
  },
  "other.controller.OrderOtherController#updateOrder": {
    "Order": { "CREATE": false, "READ": true, "UPDATE": true, "DELETE": false }
  },
  "other.controller.OrderOtherController#deleteOrder": {
    "Order": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": true }
  },
  "other.controller.OrderOtherController#findAllOrder": {
    "Order": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "order.controller.OrderController#getTicketListByDateAndTripId": {
    "Order": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "order.controller.OrderController#createNewOrder": {
    "Order": { "CREATE": true, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "order.controller.OrderController#addcreateNewOrder": {
    "Order": { "CREATE": true, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "order.controller.OrderController#queryOrders": {
    "Order": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "order.controller.OrderController#queryOrdersForRefresh": {
    "Order": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "order.controller.OrderController#calculateSoldTicket": {
    "Order": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "order.controller.OrderController#getOrderPrice": {
    "Order": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "order.controller.OrderController#payOrder": {
    "Order": { "CREATE": false, "READ": true, "UPDATE": true, "DELETE": false }
  },
  "order.controller.OrderController#getOrderById": {
    "Order": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "order.controller.OrderController#modifyOrder": {
    "Order": { "CREATE": false, "READ": true, "UPDATE": true, "DELETE": false }
  },
  "order.controller.OrderController#securityInfoCheck": {
    "Order": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "order.controller.OrderController#saveOrderInfo": {
    "Order": { "CREATE": true, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "order.controller.OrderController#updateOrder": {
    "Order": { "CREATE": false, "READ": true, "UPDATE": true, "DELETE": false }
  },
  "order.controller.OrderController#deleteOrder": {
    "Order": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": true }
  },
  "order.controller.OrderController#findAllOrder": {
    "Order": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "com.trainticket.controller.PaymentController#pay": {
    "Payment": { "CREATE": true, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "com.trainticket.controller.PaymentController#addMoney": {
    "Money": { "CREATE": true, "READ": false, "UPDATE": false, "DELETE": false }
  },
  "com.trainticket.controller.PaymentController#query": {
    "Payment": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "price.controller.PriceController#query": {
    "PriceConfig": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "price.controller.PriceController#queryAll": {
    "PriceConfig": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "price.controller.PriceController#create": {
    "PriceConfig": {
      "CREATE": true,
      "READ": true,
      "UPDATE": true,
      "DELETE": false
    }
  },
  "price.controller.PriceController#delete": {
    "PriceConfig": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": true
    }
  },
  "price.controller.PriceController#update": {
    "PriceConfig": {
      "CREATE": false,
      "READ": true,
      "UPDATE": true,
      "DELETE": false
    }
  },
  "route.controller.RouteController#createAndModifyRoute": {
    "Route": { "CREATE": true, "READ": true, "UPDATE": true, "DELETE": false }
  },
  "route.controller.RouteController#deleteRoute": {
    "Route": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": true }
  },
  "route.controller.RouteController#queryById": {
    "Route": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "route.controller.RouteController#queryAll": {
    "Route": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "route.controller.RouteController#queryByStartAndTerminal": {
    "Route": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "security.controller.SecurityController#findAllSecurityConfig": {
    "SecurityConfig": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "security.controller.SecurityController#create": {
    "SecurityConfig": {
      "CREATE": true,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "security.controller.SecurityController#update": {
    "SecurityConfig": {
      "CREATE": false,
      "READ": true,
      "UPDATE": true,
      "DELETE": false
    }
  },
  "security.controller.SecurityController#delete": {
    "SecurityConfig": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": true
    }
  },
  "security.controller.SecurityController#check": {
    "SecurityConfig": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },

  "fdse.microservice.controller.StationController#query": {
    "Station": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "fdse.microservice.controller.StationController#create": {
    "Station": {
      "CREATE": true,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "fdse.microservice.controller.StationController#update": {
    "Station": {
      "CREATE": false,
      "READ": true,
      "UPDATE": true,
      "DELETE": false
    }
  },
  "fdse.microservice.controller.StationController#delete": {
    "Station": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": true
    }
  },
  "fdse.microservice.controller.StationController#queryForStationId": {
    "Station": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "fdse.microservice.controller.StationController#queryForIdBatch": {
    "Station": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "fdse.microservice.controller.StationController#queryById": {
    "Station": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "fdse.microservice.controller.StationController#queryForNameBatch": {
    "Station": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "train.controller.TrainController#create": {
    "TrainType": {
      "CREATE": true,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "train.controller.TrainController#retrieve": {
    "TrainType": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "train.controller.TrainController#update": {
    "TrainType": {
      "CREATE": false,
      "READ": true,
      "UPDATE": true,
      "DELETE": false
    }
  },
  "train.controller.TrainController#delete": {
    "TrainType": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": true
    }
  },
  "train.controller.TrainController#query": {
    "TrainType": {
      "CREATE": false,
      "READ": true,
      "UPDATE": false,
      "DELETE": false
    }
  },
  "travel.controller.TravelController#getTrainTypeByTripId": {
    "Trip": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "travel.controller.TravelController#getRouteByTripId": {
    "Trip": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "travel.controller.TravelController#getTripsByRouteId": {
    "Trip": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "travel.controller.TravelController#createTrip": {
    "Trip": { "CREATE": true, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "travel.controller.TravelController#retrieve": {
    "Trip": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "travel.controller.TravelController#updateTrip": {
    "Trip": { "CREATE": false, "READ": true, "UPDATE": true, "DELETE": false }
  },
  "travel.controller.TravelController#deleteTrip": {
    "Trip": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": true }
  },
  "travel.controller.TravelController#queryInfo": {
    "Trip": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "travel.controller.TravelController#getTripAllDetailInfo": {
    "Trip": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "travel.controller.TravelController#queryAll": {
    "Trip": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "travel.controller.TravelController#adminQueryAll": {
    "Trip": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "travel2.controller.Travel2Controller#getTrainTypeByTripId": {
    "Trip": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "travel2.controller.Travel2Controller#getRouteByTripId": {
    "Trip": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "travel2.controller.Travel2Controller#getTripsByRouteId": {
    "Trip": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "travel2.controller.Travel2Controller#createTrip": {
    "Trip": { "CREATE": true, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "travel2.controller.Travel2Controller#retrieve": {
    "Trip": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "travel2.controller.Travel2Controller#updateTrip": {
    "Trip": { "CREATE": false, "READ": true, "UPDATE": true, "DELETE": false }
  },
  "travel2.controller.Travel2Controller#deleteTrip": {
    "Trip": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": true }
  },
  "travel2.controller.Travel2Controller#queryInfo": {
    "Trip": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "travel2.controller.Travel2Controller#getTripAllDetailInfo": {
    "Trip": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "travel2.controller.Travel2Controller#queryAll": {
    "Trip": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "travel2.controller.Travel2Controller#adminQueryAll": {
    "Trip": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "user.controller.UserController#getAllUser": {
    "User": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "user.controller.UserController#getUserByUserName": {
    "User": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "user.controller.UserController#getUserByUserId": {
    "User": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "user.controller.UserController#registerUser": {
    "User": { "CREATE": true, "READ": true, "UPDATE": false, "DELETE": false }
  },
  "user.controller.UserController#deleteUserById": {
    "User": { "CREATE": false, "READ": true, "UPDATE": false, "DELETE": true }
  },
  "user.controller.UserController#updateUser": {
    "User": { "CREATE": false, "READ": true, "UPDATE": true, "DELETE": true }
  },
  "fdse.microservice.controller.BasicController#queryForTravel": {},
  "fdse.microservice.controller.BasicController#queryForStationId": {},
  "cancel.controller.CancelController#calculate": {},
  "cancel.controller.CancelController#cancelTicket": {},
  "execute.controller.ExecuteControlller#executeTicket": {},
  "execute.controller.ExecuteControlller#collectTicket": {},
  "notification.controller.NotificationController#preserve_success": {},
  "notification.controller.NotificationController#order_create_success": {},
  "notification.controller.NotificationController#order_changed_success": {},
  "notification.controller.NotificationController#order_cancel_success": {},
  "preserveOther.controller.PreserveOtherController#preserve": {},
  "preserve.controller.PreserveController#preserve": {},
  "rebook.controller.RebookController#payDifference": {},
  "rebook.controller.RebookController#rebook": {},
  "plan.controller.RoutePlanController#getCheapestRoutes": {},
  "plan.controller.RoutePlanController#getQuickestRoutes": {},
  "plan.controller.RoutePlanController#getMinStopStations": {},
  "seat.controller.SeatController#create": {},
  "seat.controller.SeatController#getLeftTicketOfInterval": {},
  "ticketinfo.controller.TicketInfoController#queryForTravel": {},
  "ticketinfo.controller.TicketInfoController#queryForStationId": {},
  "travelplan.controller.TravelPlanController#getTransferResult": {},
  "travelplan.controller.TravelPlanController#getByCheapest": {},
  "travelplan.controller.TravelPlanController#getByQuickest": {},
  "travelplan.controller.TravelPlanController#getByMinStation": {},
  "verifycode.controller.VerifyCodeController#imageCode": {},
  "verifycode.controller.VerifyCodeController#verifyCode": {}
};

// STEP 3: ADD REQUIRED PERMISSIONS FROM CALLED MICROSERVICES TO CALLER
const orEntities = (permSet, toAdd) => {
	if (!permSet) { return toAdd; }
	const result = { ...permSet };
	for (const k of Object.keys(toAdd)) {
		result[k] = orPermissions(permSet[k], toAdd[k]);
	}
	return result;
};
const orPermissions = (perm, toAdd) => {
	if (!perm) { return toAdd; }
	const result = {};
	for (const k of Object.keys(toAdd)) {
	  result[k] = !!perm[k] || !!toAdd[k];
	}
	return result;
}

for (let n = 0; n < Object.keys(ground_truth).length; n++) {
	for (const k of Object.keys(result_1)) {
	  // Intentional `=== undefined`, since `!{}` evaluates to false
	  // If it's undefined, there are no permissions on it (as per creating ground truth)
	  if (ground_truth[k] === undefined) {
	    console.log(`Unknown endpoint ${k}`);
	    ground_truth[k] = {};
	  }
	  
	  // For all endpoints called by k
	  for (const v of Object.keys(result_1[k])) {
		if (ground_truth[v] === undefined) { ground_truth[v] = {} }
		ground_truth[k] = orEntities(ground_truth[k], ground_truth[v]);
	  }
	}
}

// STEP 4: GENERATE A COMPARABLE ORACLE
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
flatten(undefined, ground_truth, flattened_result);
flattened_result;