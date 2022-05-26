import React, { useState } from 'react'
import { useStyles } from './myAbonement.styles'
import { Card, Container, Fade, Grid, Modal } from '@mui/material'
import Title from 'components/Title/Title'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import AbonementListItem from './components/AbonementList/AbonementListItem'
import { Id } from 'shared-files/types'
import { GetOneAbonementWithUserData } from 'api/abonements/abonements'
import { AbonementWithUserData } from 'api/abonements/types'
import SelectedAbonement from './components/SelectedAbonement/SelectedAbonement'
import { SERVER_DELAY_TIME } from 'shared-files/constants'
import { useAppDispatch } from 'redux/hooks'
import { error } from 'redux/slices/snackbarSlice'

const MyAbonement: React.FC = (): React.ReactElement => {
  const classes = useStyles()
  const { user } = useAuthContext()

  const dispatch = useAppDispatch()

  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedAbonement, setSelectedAbonement] =
    useState<AbonementWithUserData | null>(null)

  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
  }

  const getOneAbonementData = async (userId: Id, abonementId: Id) => {
    setIsLoading(true)
    setTimeout(async () => {
      try {
        const response = await GetOneAbonementWithUserData({
          abonementId,
          userId,
        })
        setSelectedAbonement(response.abonementWithUserData)
      } catch (err: any) {
        dispatch(error({ message: err.message }))
      } finally {
        setIsLoading(false)
      }
    }, SERVER_DELAY_TIME)
  }

  const openAbonement = (abonementId: Id) => {
    handleOpen()
    user?.id && getOneAbonementData(user?.id, abonementId)
  }
  return (
    <>
      <Title>Мої абонементи</Title>
      <Container component="section" sx={{ pb: 2 }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          {user?.abonements &&
            user?.abonements.map((abonement) => (
              <Grid key={abonement.id} item xs={12} sm={6} md={4}>
                <AbonementListItem
                  abonement={abonement}
                  onClick={() => openAbonement(abonement.id)}
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
            <SelectedAbonement
              abonement={selectedAbonement}
              isLoading={isLoading}
            />
          </Card>
        </Fade>
      </Modal>
    </>
  )
}

export default MyAbonement
