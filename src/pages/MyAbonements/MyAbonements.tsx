import React, { useEffect, useState } from 'react'
import { useStyles } from './myAbonement.styles'

import { useTranslation } from 'react-i18next'

import { Card, Container, Fade, Grid, Modal } from '@mui/material'
import Title from 'components/Title/Title'

import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { Id } from 'shared-files/types'
import { useHttpRequest } from 'shared-files/hooks'

import {
  GetLearnerAbonements,
  GetOneLearnerAbonement,
} from 'api/abonements/abonements'

import AbonementListItem from './components/AbonementList/AbonementListItem'
import SelectedAbonement from './components/SelectedAbonement/SelectedAbonement'
import {
  selectLearnerAbonement,
  setLearnerAbonements,
  setSelectedLearnerAbonement,
} from 'redux/slices/learnerAbonementSlice'
import { useAppSelector } from 'redux/hooks'

const MyAbonement: React.FC = (): React.ReactElement => {
  const classes = useStyles()
  const { user } = useAuthContext()

  const { t } = useTranslation(['myAbonements'])
  const { learnerAbonements } = useAppSelector(selectLearnerAbonement)

  const [getOneLearnerAbonement, _, isLoading] = useHttpRequest(
    GetOneLearnerAbonement,
    { shouldShowLoading: false, action: setSelectedLearnerAbonement },
  )

  const [getLearnerAbonements] = useHttpRequest(GetLearnerAbonements, {
    action: setLearnerAbonements,
  })

  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
  }

  const getAllAbonements = async (learnerId: Id) => {
    await getLearnerAbonements({ learnerId })
  }

  const getOneAbonementData = async (learnerId: Id, abonementId: Id) => {
    await getOneLearnerAbonement({
      abonementId,
      learnerId,
    })
  }

  const openAbonement = (abonementId: Id) => {
    handleOpen()
    user?.id && getOneAbonementData(user?.id, abonementId)
  }

  useEffect(() => {
    getAllAbonements(user?.id || 0)
  }, [])
  return (
    <>
      <Title>{t('myAbonements:title')}</Title>
      <Container component="section" sx={{ pb: 2 }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          {learnerAbonements &&
            learnerAbonements.map((la) => (
              <Grid key={la.id} item xs={12} sm={6} md={4}>
                <AbonementListItem
                  learnerAbonement={la}
                  onClick={() => openAbonement(la.abonement?.id || 0)}
                />
              </Grid>
            ))}
        </Grid>
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open}>
          <Card className={classes.modalContent}>
            <SelectedAbonement isLoading={isLoading} />
          </Card>
        </Fade>
      </Modal>
    </>
  )
}

export default MyAbonement
